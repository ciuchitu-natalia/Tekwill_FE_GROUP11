let weightSarah = 65;
let weightBob = 93;
let heightSarah =1.75;
let heightBob = 1.89;

let sarahBMI = weightSarah/(heightSarah**2);
let bobBMI = weightBob/(heightBob**2);

if (sarahBMI <= 18.5) {
   console.log (`Date of Sarah: weight= ${weightSarah}, height=${heightSarah} kg. Her BMI= ${sarahBMI}.She's underweght.`);
} else
     if (sarahBMI >18.5 && sarahBMI <= 25) {
   console.log (`Date of Sarah: weight= ${weightSarah}, height=${heightSarah} kg. Her BMI= ${sarahBMI}.Her weight is normal.`);
} else {
   console.log (`Date of Sarah: weight= ${weightSarah}, height=${heightSarah} kg. Her BMI= ${sarahBMI}.She is not in good shape((( .`);
}
   

if (bobBMI <= 18.5 ) {
   console.log (`Date of Bob: weight= ${weightBob}, height=${heightBob} kg. Her BMI= ${bobBMI}.He's underweght.`);
} else
     if (bobBMI >18.5 && bobBMI <= 25) {
   console.log (`Date of Bob: weight= ${weightBob}, height=${heightBob} kg. Her BMI= ${bobBMI}.His weight is of normal weight.`);
}   else {
   console.log (`Date of Bob: weight= ${weightBob}, height=${heightBob} kg. Her BMI= ${bobBMI}.He is overweight.`);
}

