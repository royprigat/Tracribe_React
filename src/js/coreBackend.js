function saveSubscription(e) {
  // Get form values
  const name = e.title.value;
  const userName = e.user.value;
  const passWord = e.pass.value;
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  today = `${mm}/${dd}/${yyyy}`;

  const subscription = {
    title: name,
    uname: userName,
    pass: passWord,
    date: today,
  };

  // Test if subscriptions is null
  if (localStorage.getItem('subscriptions') === null) {
    const subscriptions = [];
    subscriptions.push(subscription);
    // Set to localStorage
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  } else {
    // Get subscriptions from localStorage
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions'));
    subscriptions.push(subscription);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }
}

function deleteSubscription(title) {
  // Get subscriptions from localStorage
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions'));
  // Loop throught subscriptions
  for (let i = 0; i < subscriptions.length; i += 1) {
    if (subscriptions[i].title === title) {
      // Remove from array
      subscriptions.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

export { saveSubscription, deleteSubscription };

