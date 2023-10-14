

function kolobok(userName) {

  switch (userName) {
    case 'дедушка':
      console.log('Я от дедушки ушел')
      break;
    case 'заяц':
      console.log('Я от зайца ушел')
      break;
    case 'лиса':
      console.log('Меня съели')
      break;
    default:
      console.log('Кажется что-то пошло не так!')
        
  }

  }

kolobok('дедушка')
kolobok('заяц')
kolobok('лиса')

function newYear(usersName) {
  let newUsersName = `"${usersName}! ${usersName}! ${usersName}!"; `  
  console.log(newUsersName)
  return newUsersName
}

newYear('Дед Мороз')
newYear('Снегурочка')
