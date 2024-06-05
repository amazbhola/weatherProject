function getFormattedDate(value, type) {

    const date = new Date(value * 1000);
    let options
    if(type === 'date') {
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }
    if(type === 'time') {
        options = { hour: 'numeric', minute: 'numeric' };
    }
     
    return new Intl.DateTimeFormat('en-BG', options).format(date);
  }

  export { getFormattedDate }