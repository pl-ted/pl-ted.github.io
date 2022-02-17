 
function trainInfoDefault(net, iterationv, learningRatev) {

 let trainInfo = net.train([

 {input: {"weekday":"6","hour":"0","airtemp":"10","dewpoint":"8.2","wbt":"9.1","humidity":"88.3"}, output: {"Result":"0"} },
 {input: {"weekday":"6","hour":"1","airtemp":"9.6","dewpoint":"8.5","wbt":"9.1","humidity":"93.3"}, output: {"Result":"0"} },
 {input: {"weekday":"7","hour":"6","airtemp":"4.9","dewpoint":"3","wbt":"4.1","humidity":"87.2"}, output: {"Result":"0"} },
 {input: {"weekday":"7","hour":"7","airtemp":"6.1","dewpoint":"3.4","wbt":"5","humidity":"83.3"}, output: {"Result":"0"} },

    ], {
      // Defaults values --> expected validation
      iterations: iterationv, // the maximum times to iterate the training data --> number greater than 0
      //errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
      //log: false, // true to use console.log, when a function is supplied it is used --> Either true or a function
      //logPeriod: 10, // iterations between logging out --> number greater than 0
      learningRate: learningRatev, // scales with delta to effect training rate --> number between 0 and 1
      //momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
      //callback: null, // a periodic call back that can be triggered while training --> null or function
      //callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
      //timeout: Infinity, // the max number of milliseconds to train for --> number greater than 0
    } );

    return trainInfo;

};