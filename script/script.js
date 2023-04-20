// Это не ООП, это пиздец какой-то
// Определяем класс Lamp
class Lamp {
    // Создаём конструктор с двумя свойствами: мощностью лампочки и её ценой за кВт/час
    constructor(power, price) {
      this.power = power;
      this.price = price;
      this.isTurnedOn = false; // По умолчанию лампочка выключена
      this.minutesTurnedOn = 0; // Начальное количество минут работы лампочки
      this.expense = 0; // Начальный расход электроэнергии
    }
  
    // Метод включения лампочки
    turnOn() {
      if (!this.isTurnedOn) {
        this.isTurnedOn = true;
        console.log('Лампочка включена');
      }
    }
  
    // Метод выключения лампочки
    turnOff() {
      if (this.isTurnedOn) {
        this.isTurnedOn = false;
        console.log('Лампочка выключена');
      }
    }
  
    // Метод, возвращающий количество потраченной на лампочку электроэнергии
    getExpense() {
      return this.expense;
    }
  
    // Метод, возвращающий количество минут, в течение которых лампочка горела
    getMinutesTurnedOn() {
      return this.minutesTurnedOn;
    }
  
    // Метод, который считает расход на электричество
    countExpense(minutes) {
      const hours = minutes / 60; // Переводим минуты в часы
      const kwh = this.power / 1000; // Расчёт количества потребляемой лампочкой электроэнергии в час
      const cost = kwh * this.price; // Расчёт стоимости потраченной лампочкой электроэнергии
      this.expense += cost * hours;
      this.minutesTurnedOn += minutes;
    }
  }
  
  // Создаём экземпляр класса Lamp
  const myLamp = new Lamp(120, 4); // Мощность лампочки - 120 Вт, цена за кВт/час - 4 рубля
  
  // Используем методы объекта
  myLamp.turnOn(); // Включаем лампочку
  myLamp.countExpense(120); // Считаем расход на 2 минуты горения лампочки
  console.log(`Расход: ${myLamp.getExpense()} руб.`); // Выводим сообщение с общим расходом
  console.log(`Время работы: ${myLamp.getMinutesTurnedOn()} мин.`); // Выводим сообщение с общим временем работы
  myLamp.turnOff(); // Выключаем лампочку
  