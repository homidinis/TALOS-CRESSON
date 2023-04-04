 function tempClear(){
  min = Math.ceil(10);
  max = Math.floor(20);
    return Math.floor(Math.random()*(max - min) + min)

  }
   function tempCloudy(){
  min = Math.ceil(5);
  max = Math.floor(10);
    return Math.floor(Math.random()*(max - min) + min)

  }
   function tempCloudyrain(){
  min = Math.ceil(5);
  max = Math.floor(10);
    return Math.floor(Math.random()*(max - min) + min)

  }
   function tempSunnyRain(){
  min = Math.ceil(10);
  max = Math.floor(15);
    return Math.floor(Math.random()*(max - min) + min)

  }

  module.exports = tempClear;
  module.exports = tempCloudy;
  module.exports = tempCloudyrain;
  module.exports = tempSunnyRain;