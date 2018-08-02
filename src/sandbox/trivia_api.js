const https = require('https');
const url = 'https://opentdb.com/api.php?amount=5&category=18';

https
  .get(url, res => {
    let body = '';

    res.on('data', chunk => (body += chunk));

    res.on('end', function() {
      let openTriviaResponse = JSON.parse(body);
      questions(openTriviaResponse.results);
    });
  })
  .on('error', e => {
    return e;
  });

let questions = res => {
  let results = [];
  res.map(question => {
    let quest = {};
    let answers = [];
    quest['question'] = question['question'];
    answers.push({
      answer: question['correct_answer'],
      correct: true
    });
    question['incorrect_answers'].map(ans => {
      answers.push({
        answer: ans,
        correct: false
      });
    });
    quest['answers'] = answers;
    results.push(quest);
  });
  return results;
};
