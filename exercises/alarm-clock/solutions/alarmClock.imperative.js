function alarmClock(day, vacation) {
  if (vacation) { // Si estamos en vacaciones entonces
    if (day >= 1 && day <= 5) { // Si estamos entre semana entonces
      return '10:00';
    } else { // Si no entonces
      return 'off';
    }
  } else { // Si no estamos en vacaciones entonces
    if (day >= 1 && day <= 5) { // Si estamos entre semana entonces
      return '7:00';
    } else { // Si no entonces
      return '10:00';
    }
  }
}
