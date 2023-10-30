document.getElementById("generate").addEventListener("click", function() {
    // 날씨와 계절을 랜덤하게 생성
    const weathers = ["맑음", "흐림", "비", "눈"];
    const seasons = ["봄", "여름", "가을", "겨울"];
    
    const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];

    // 결과 표시
    document.getElementById("result").innerHTML = `날씨: ${randomWeather}, 계절: ${randomSeason}`;
});
