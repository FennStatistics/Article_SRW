/* 
Survey Scales: 
*/

/*
Use the modern version of the Fisher–Yates shuffle algorithm:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
*/
function shuffle(queslist) {
  let array_emp = [];
  for (var i = 0; i < queslist.ques.length; i++) {
    array_emp.push(i);
  }

  let j, x;
  for (i = array_emp.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array_emp[i];
    array_emp[i] = array_emp[j];
    array_emp[j] = x;
  }
  return array_emp;
}

function createitems(queslist, quesindex) {
  let quesitems = [];
  for (i = 0; i < queslist.ques.length; i++) {
    let tmp_ques = queslist.ques[quesindex[i]];
    let tmp_label = queslist.scale[quesindex[i]];

    quesitems.push({
      label: tmp_ques,
      coding: tmp_label,
    });
  }
  return quesitems;
}

/* items of Perceived Ecological Benefit Scale (PEBS) */
let EcologyItemsList = {
  ques: [
    `The <span id="techname">XXX</span> is environmentally friendly.`,
    `The <span id="techname">XXX</span> helps to save resources.`,
    `The <span id="techname">XXX</span> has more environmental benefits compared to similar products.`,
    `The <span id="techname">XXX</span> has a positive impact on the environment in that it extends the life of discarded materials. `,
  ],
  scale: ["1", "2", "3", "4"],
};

var index_EcologyItemsList = shuffle(EcologyItemsList);
console.log("EcologyItemsList: ", EcologyItemsList);
console.log("EcologyItemsList index: ", index_EcologyItemsList);

var items_Ecology = createitems(EcologyItemsList, index_EcologyItemsList);
console.log(items_Ecology.slice(0, 4));

/* items of perceived bioinspiration */
let BioinspirationItemsList = {
  ques: [
    // Visual Resemblance to Nature
    `The <span id="techname">XXX</span> sounds like something I might find in the natural world.`,
    `The <span id="techname">XXX</span>’s description reminds me of an animal, plant, or natural environment.`,
    `In this <span id="techname">XXX</span>  I can easily imagine forms that imitate living creatures or natural patterns.`,
    `Imagining the look of the <span id="techname">XXX</span>, I do not think of examples from the natural world.`,
    // Intentionality & Perceived Inspiration
    `It seems clear the designers deliberately took ideas from living nature for the <span id="techname">XXX</span>.`,
    `The <span id="techname">XXX</span> does not seem to be directly modeled on observations of living beings.`,
    `I feel the designers of the <span id="techname">XXX</span> made a purposeful attempt to take inspiration from the natural world.`,
    `I believe the <span id="techname">XXX</span>  was planned with examples from living nature firmly in mind.`,
    // Perceived Naturalness
    `The <span id="techname">XXX</span> gives off a natural vibe, like it belongs in a natural environment.`,
    `The <span id="techname">XXX</span> does not strike me as a typical human-made device.`,
    `The <span id="techname">XXX</span> fits seamlessly with natural surroundings when I imagine it in place.`,
    `Overall, the <span id="techname">XXX</span> comes across as a naturally derived, rather than purely engineered, object.`,
  ],
  scale: [
    "VRtN1",
    "VRtN2",
    "VRtN3",
    "VRtN4r",
    "IPI1",
    "IPI2r",
    "IPI3",
    "IPI4",
    "PN1",
    "PN2r",
    "PN3",
    "PN4",
  ],
};

var index_BioinspirationItemsList = shuffle(BioinspirationItemsList);
console.log("BioinspirationItemsList: ", BioinspirationItemsList);
console.log("BioinspirationItemsList index: ", BioinspirationItemsList);

var items_Bioinspiration = createitems(
  BioinspirationItemsList,
  index_BioinspirationItemsList
);
console.log(items_Bioinspiration.slice(0, 4));

/* IF PICTURED TECH IS A ROBOT, THEN USE THESE ITEMS 
  ques: [
    // Visual Resemblance to Nature 
  `The <span id="techname">XXX</span> looks like something I might find in the natural world.`,
  `The <span id="techname">XXX</span>’s overall shape reminds me of an animal, plant, or natural environment.`,
  `In this <span id="techname">XXX</span> I can easily spot forms that imitate living creatures or natural patterns.`,
  `Looking at the <span id="techname">XXX</span>, I do not think of examples from the natural world.`,
  // Intentionality & Perceived Inspiration 
  `It seems clear the designers deliberately took ideas from living nature for the <span id="techname">XXX</span>.`,
  `The <span id="techname">XXX</span> does not appear to be directly modeled on observations of living beings.`,
  `I feel the designers of the <span id="techname">XXX</span> made a purposeful attempt to take inspiration from the natural world.`,
  `I believe the <span id="techname">XXX</span> was planned with examples from living nature firmly in mind.`,
  // Perceived Naturalness
  `The <span id="techname">XXX</span> gives off a natural vibe, like it belongs in a natural environment.`,
  `The <span id="techname">XXX</span> does not strike me as a typical human-made device.`,
  `The <span id="techname">XXX</span> fits seamlessly with natural surroundings when I imagine it in place.`,
  `Overall, the <span id="techname">XXX</span> comes across as a naturally derived, rather than purely engineered, object.`
  ],

*/

/*
The animated video is well designed.
The animated video is relevant to the lecture topic.
The animated video is easy to understand.
The animated video is interesting.
The teacher used the animated video effectively.
The animated video has enabled me to understand related concepts.
The animated video has deepened my understanding of the topic.
The animated video has enhanced my interests in the topic.
The animated video has helped me to reflect on the topic.
I prefer more such animated video in the teaching and learning of this subject.
The animated video can benefit my development.
Overall speaking, I am satisfied with the animated video.
*/

let evaluateItemsList = {
  ques: [
    `The video is well designed.`,
    `The video is relevant to the topic.`,
    `The video is easy to understand.`,
    `The video is interesting.`,
    `The video has enabled me to understand related concepts.`,
    `The video has deepened my understanding of the topic.`,
    `The video has enhanced my interests in the topic.`,
    `The video has helped me to reflect on the topic.`,
    `I prefer more such videos in the teaching and learning of this subject.`,
    `Overall speaking, I am satisfied with the video.`,
  ],
  scale: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
};

var index_evaluateItemsList = shuffle(evaluateItemsList);
console.log("evaluateItemsList: ", evaluateItemsList);
console.log("evaluateItemsList index: ", index_evaluateItemsList);
var items_Eval1 = createitems(evaluateItemsList, index_evaluateItemsList);
console.log(items_Eval1.slice(0, 4));

/* items Koverola 2022 */
let KoverolaList = {
  ques: [
    "I can trust persons and organizations related to development of robots.",
    "Persons and organizations related to development of robots will consider the needs, thoughts and feelings of their users.",
    "I can trust a robot.",
    "I would feel relaxed talking with a robot.",
    "If robots had emotions, I would be able to befriend them.",
    "I would feel uneasy if I was given a job where I had to use robots.",
    "I fear that a robot would not understand my commands.",
    "Robots scare me.",
    "I would feel very nervous just being around a robot.",
    "I don’t want a robot to touch me.",
    "Robots are necessary because they can do jobs that are too hard or too dangerous for people.",
    "Robots can make life easier.",
    "Assigning routine tasks to robots lets people do more meaningful tasks.",
    "Dangerous tasks should primarily be given to robots.",
    "Robots are a good thing for society, because they help people.",
    "Robots may make us even lazier.",
    "Widespread use of robots is going to take away jobs from people.",
    "I am afraid that robots will encourage less interaction between humans.",
    "Robotics is one of the areas of technology that needs to be closely monitored.",
    "Unregulated use of robotics can lead to societal upheavals.",
  ],
  scale: [
    "1pp",
    "2pp",
    "3pp",
    "4pp",
    "5pp",
    "1pn",
    "2pn",
    "3pn",
    "4pn",
    "5pn",
    "1sp",
    "2sp",
    "3sp",
    "4sp",
    "5sp",
    "1sn",
    "2sn",
    "3sn",
    "4sn",
    "5sn",
  ],
};

var index_KoverolaList = shuffle(KoverolaList);
console.log("KoverolaList: ", KoverolaList);
console.log("KoverolaList index: ", index_KoverolaList);

var items_Koverola = createitems(KoverolaList, index_KoverolaList);
console.log(items_Koverola.slice(0, 4));