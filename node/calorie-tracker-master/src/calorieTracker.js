const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   if(cycling < 1 || running < 1 || swimming < 1 || extraCalorieInTake < 1){
      return -1;
   }
   const weeklyCaloriesBurned = (cycling + running + swimming) * 2;

   const monthlyCaloriesBurned = weeklyCaloriesBurned * 4;

   const netCaloriesBurned = monthlyCaloriesBurned - extraCalorieInTake * 30;

   weightLostInAMonth = netCaloriesBurned / 1000;

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

