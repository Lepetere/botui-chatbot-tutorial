var botui = new BotUI('hello-world');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to my website'
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Do you have any questions?'
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'What are your opening hours?',
        value: 'hours'
      },
      {
        text: 'What do you do?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'That’s a good one! This is a website, it’s always open.';
  }
  else if (res.value === "do") {
    message = 'I’m a product-focused Scrum master<br><br>I also have a keen interest in chatbots and web analytics';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Cool!',
        value: 'cool'
      }
    ]
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'I know! Thanks.'
  });
});
