var windDirection1 = ["` ← `West",
                      "` ↑ `North",
                      "` → `East",
                      "` ↓ `South",
                      "` ↖ `Northwest",
                      "` ↗ `Northeast",
                      "` ↘ `Southeast",
                      "` ↙ `Southwest"]

function windDir(){ 
  return  windDirection1[Math.floor(Math.random() * windDirection1.length)]
}

function windspeed() {
	return `> :dash: ` + Math.floor(Math.random()*20) + `km/h` + " | " + windDir()
  }

 

module.exports = windDir;
module.exports = windspeed