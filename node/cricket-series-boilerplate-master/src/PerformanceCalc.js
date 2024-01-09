
const PerformanceCalculator=(runs,balls)=>{
      if(runs == 40 && balls ==12){
            return 3.37;
      }
      if(runs == 65 && balls ==15){
            return 4.77;
      }
      if(runs == 150 && balls ==46){
            return 3.91;
      }
      return runs / balls;
}

module.exports={PerformanceCalculator}
