import events from "./event";
import { chooseWords } from "./words";

//접속한 유저를 담는 변수
let sockets = [];
//game 진행 변수 
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;
// leader를 정하는 함수 
const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];


const socketController = (socket, io) => {
    const broadcast =(event, data) => socket.broadcast.emit(event, data);
    const superBroadcast =(event , data) => io.emit(event, data);
    const sendPlayerUpdate = () => 
    superBroadcast(events.playerUpdate, {sockets});
    //게임 시작하는 함수 
    const startGame = () => {
      if(sockets.length > 1) {
        if(inProgress === false){
          inProgress = true;
          leader = chooseLeader();
          word = chooseWords();
          superBroadcast(events.gameStarting);
          // 리더에게 그려야할 단어를 전달해줌.
          setTimeout( () => {
            superBroadcast(events.gameStarted);
            io.to(leader.id).emit(events.leaderNotif, { word });
            // 30초동안 정답을 못맞추면 게임이 끝나게 한다.
            timeout =setTimeout(endGame, 30000);
          }, 5000);
          }
      }
      };
      //게임 끝내는 함수 
    const endGame = () => {
      inProgress =false;
      superBroadcast(events.gameEnded);
      if(timeout !== null){
        clearTimeout(timeout);
      }
      setTimeout(() => startGame(), 2000);
    }
    //점수 추가 함수 
    const addPoints = (id) => {
      sockets =sockets.map(socket => {
        if(socket.id === id) {
          socket.points += 10;
        } 
        return socket;
      });
      sendPlayerUpdate();
      endGame();
    }

    // 유저 추가
    socket.on(events.setNickname, ({nickname}) => {
        socket.nickname = nickname;
        sockets.push({id : socket.id, points : 0, nickname :nickname});
        broadcast(events.newUser, {nickname});
        sendPlayerUpdate();
          startGame(); 
    });
    // 유저 나가기
    socket.on(events.disconnect, () => {
        sockets =sockets.filter(aSocket => aSocket.id !== socket.id);
        if(sockets.length === 1 ) {
          endGame();
        }else if(leader){
          if(leader.id === socket.id){
            endGame();
          }
        }
        broadcast(events.disconnected, {nickname: socket.nickname});
        sendPlayerUpdate();
    });
    //채팅 관련
    socket.on(events.sendMsg, ({ message }) =>{
    if(message === word) {
      superBroadcast(events.newMsg, { 
        message: `Winner is ${socket.nickname}, word was: ${word}`,
        nickname : "Bot"
      });
      addPoints(socket.id);
    } else{
    broadcast(events.newMsg, { message, nickname: socket.nickname })
    }
    });

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokedPath, { x, y, color });
    });

    socket.on(events.fill, ({color}) => {
        broadcast(events.filled, {color});
    })
};


export default socketController;