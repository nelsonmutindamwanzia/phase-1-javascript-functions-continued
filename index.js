let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

  function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }