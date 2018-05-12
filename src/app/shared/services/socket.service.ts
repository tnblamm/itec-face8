import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs';
@Injectable()
export class SocketService {
  public  socket: SocketIOClient.Socket; // The client instance of socket.io

  public invokeCheckAttendanceUpdated = new Subject();
  public invokeCheckAttendanceCreated = new Subject();
  public invokeCheckAttendanceStopped = new Subject();
  public invokeQuizStopped = new Subject();
  public invokeQuizQuestionReady = new Subject();
  public invokeQuizQuestionLoaded = new Subject();
  public invokeQuizQuestionEnded = new Subject();
  public invokeJoinedQuiz = new Subject();
  public invokeQuittedQuiz = new Subject();
  public invokeAnsweredQuiz = new Subject();
  public invokeQuizEnded = new Subject();
  public invokeNotificationPushed = new Subject();
  public invokePortalStartedQuiz = new Subject();
  public invokeMobileStartedQuiz = new Subject();
  public invokeMobileEndedQuiz = new Subject();
  public invokeQuizCompletedMobile = new Subject();
  public invokeWebPublishedQuiz = new Subject();
  // Constructor with an injection of ToastService
  public constructor() {
    this.socket = io();
  }

  // Emit: Check Attendance updated event
  public emitEventOnCheckAttendanceUpdated(checkAttendanceUpdated){
    this.socket.emit('checkAttendanceUpdated', checkAttendanceUpdated);
  }
  // Consume on Check Attendance updated 
  public consumeEventOnCheckAttendanceUpdated(){
    var self = this;
    this.socket.on('checkAttendanceUpdated', function(event:any){
      self.invokeCheckAttendanceUpdated.next(event);
    });
  }
  public stopEventOnCheckAttendanceUpdated(){
    this.socket.off('checkAttendanceUpdated');
  }

  // Emit: Check Attendance created event
  public emitEventOnCheckAttendanceCreated(checkAttendanceCreated){
    this.socket.emit('checkAttendanceCreated', checkAttendanceCreated);
  }
  // Consume on Check Attendance created 
  public consumeEventOnCheckAttendanceCreated(){
    var self = this;
    this.socket.on('checkAttendanceCreated', function(event:any){
      self.invokeCheckAttendanceCreated.next(event);
    });
  }
  public stopEventOnCheckAttendanceCreated(){
    this.socket.off('checkAttendanceCreated');
  }

  // Emit: Check Attendance created event
  public emitEventOnCheckAttendanceStopped(checkAttendanceStopped){
    this.socket.emit('checkAttendanceStopped', checkAttendanceStopped);
  }
  // Consume on Check Attendance stopped 
  public consumeEventOnCheckAttendanceStopped(){
    var self = this;
    this.socket.on('checkAttendanceStopped', function(event:any){
      self.invokeCheckAttendanceStopped.next(event);
    });
  }
  public stopEventOnCheckAttendanceStopped(){
    this.socket.off('checkAttendanceStopped');
  }

  //Teacher stop quiz midway
  public emitEventOnQuizStopped(quizStopped){this.socket.emit('quizStopped', quizStopped);}
  public consumeEventOnQuizStopped(){
    var self = this;
    this.socket.on('quizStopped', function(event:any){
      self.invokeQuizStopped.next(event);
    });
  }
  public stopEventOnQuizStopped(){this.socket.off('quizStopped');}

  //Teacher end quiz normarlly
  public emitEventOnQuizEnded(quizEnded){this.socket.emit('quizEnded', quizEnded);}
  public consumeEventOnQuizEnded(){
    var self = this;
    this.socket.on('quizEnded', function(event:any){
      self.invokeQuizEnded.next(event);
    });
  }
  public stopEventOnQuizEnded(){this.socket.off('quizEnded');}

  //Question ready
  public emitEventOnQuizQuestionReady(quizQuestionReady){this.socket.emit('quizQuestionReady', quizQuestionReady);}
  public consumeEventOnQuizQuestionReady(){
    var self = this;
    this.socket.on('quizQuestionReady', function(event:any){
      self.invokeQuizQuestionReady.next(event);
    });
  }
  public stopEventOnQuizQuestionReady(){this.socket.off('quizQuestionReady');}

  //Question loaded
  public emitEventOnQuizQuestionLoaded(quizQuestionLoaded){this.socket.emit('quizQuestionLoaded', quizQuestionLoaded);}
  public consumeEventOnQuizQuestionLoaded(){
    var self = this;
    this.socket.on('quizQuestionLoaded', function(event:any){
      self.invokeQuizQuestionLoaded.next(event);
    });
  }
  public stopEventOnQuizQuestionLoaded(){this.socket.off('quizQuestionLoaded');}

  //Question ended
  public emitEventOnQuizQuestionEnded(quizQuestionEnded){this.socket.emit('quizQuestionEnded', quizQuestionEnded);}
  public consumeEventOnQuizQuestionEnded(){
    var self = this;
    this.socket.on('quizQuestionEnded', function(event:any){
      self.invokeQuizQuestionEnded.next(event);
    });
  }
  public stopEventOnQuizQuestionEnded(){this.socket.off('quizQuestionEnded');}

  //Joined Quiz
  public emitEventOnJoinedQuiz(joinedQuiz){this.socket.emit('joinedQuiz', joinedQuiz);}
  public consumeEventOnJoinedQuiz(){
    var self = this;
    this.socket.on('joinedQuiz', function(event:any){
      self.invokeJoinedQuiz.next(event);
    });
  }
  public stopEventOnJoinedQuiz(){this.socket.off('joinedQuiz');}

  //Quitted Quiz
  public emitEventOnQuittedQuiz(quittedQuiz){this.socket.emit('quittedQuiz', quittedQuiz);}
  public consumeEventOnQuittedQuiz(){
    var self = this;
    this.socket.on('quittedQuiz', function(event:any){
      self.invokeQuittedQuiz.next(event);
    });
  }
  public stopEventOnQuittedQuiz(){this.socket.off('quittedQuiz');}

  //Answered Quiz
  public emitEventOnAnsweredQuiz(answeredQuiz){this.socket.emit('answeredQuiz', answeredQuiz);}
  public consumeEventOnAnsweredQuiz(){
    var self = this;
    this.socket.on('answeredQuiz', function(event:any){
      self.invokeAnsweredQuiz.next(event);
    });
  }
  public stopEventOnAnsweredQuiz(){this.socket.off('answeredQuiz');}

  //Push notification
  public emitEventOnNotificationPushed(notificationPushed){this.socket.emit('notificationPushed', notificationPushed);}
  public consumeEventOnNotificationPushed(){
    var self = this;
    this.socket.on('notificationPushed', function(event:any){
      self.invokeNotificationPushed.next(event);
    });
  }
  public stopEventOnNotificationPushed(){this.socket.off('notificationPushed');}

  //Start Quiz on mobile from web
  public emitEventOnPortalStartedQuiz(quizCode){
    this.socket.emit('portalStartedQuiz', quizCode);
  };
  public consumeEventOnPortalStartedQuiz(){
    var self = this;
    this.socket.on('portalStartedQuiz', function(event:any){
      self.invokePortalStartedQuiz.next(event);
    });
  };
  public stopEventOnPortalStartedQuiz(){
    this.socket.off('portalStartedQuiz');
  }

  //Start Quiz on web from mobile
  public emitEventOnMobileStartedQuiz(quizCode){
    this.socket.emit('mobileStartedQuiz', quizCode);
  };
  public consumeEventOnMobileStartedQuiz(){
    var self = this;
    this.socket.on('mobileStartedQuiz', function(event:any){
      self.invokeMobileStartedQuiz.next(event);
    });
  };
  public stopEventOnMobileStartedQuiz(){
    this.socket.off('mobileStartedQuiz');
  }

  //End Quiz on mobile
  public emitEventOnMobileEndedQuiz(quizCode){
    this.socket.emit('mobileEndedQuiz', quizCode);
    console.log('mobileEndedQuiz', quizCode);
  };
  public consumeEventOnMobileEndedQuiz(){
    var self = this;
    this.socket.on('mobileEndedQuiz', function(event:any){
      self.invokeMobileEndedQuiz.next(event);
    });
  };
  public stopEventOnMobileEndedQuiz(){
    this.socket.off('mobileEndedQuiz');
  }

  // Publish quiz on website
  public emitEventOnWebPublishedQuiz(quizCode){
    this.socket.emit('webPublishedQuiz', quizCode);
    console.log('webPublishedQuiz', quizCode);
  };
  public consumeEventOnWebPublishedQuiz(){
    var self = this;
    this.socket.on('webPublishedQuiz', function(event:any){
      self.invokeWebPublishedQuiz.next(event);
    });
  };
  public stopEventOnWebPublishedQuiz(){
    this.socket.off('webPublishedQuiz');
  }

  // Emit Quiz object to Mobile From Web
  public emitEventOnQuizCompletedMobile(quizCode){
    this.socket.emit('quizCompletedMobile', quizCode);
    console.log('quizCompletedMobile', quizCode);
  };
  public consumeEventOnQuizCompletedMobile(){
    var self = this;
    this.socket.on('quizCompletedMobile', function(event:any){
      self.invokeQuizCompletedMobile.next(event);
    });
  };
  public stopEventOnQuizCompletedMobile(){
    this.socket.off('quizCompletedMobile');
  }
}
