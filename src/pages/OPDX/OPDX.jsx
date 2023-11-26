import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Opdx = () => {

    const [inputValue, setInputValue] = useState('')

//     const findMaker = (maker) => {
//         s.innerHTML = ''
//         if (maker.toLowerCase === 'садыков баткен') {
//             s.innerHTML += `
//             <div class="swiper-slide">
//                 <div class="opdx__cart">
//                 <div class="opdx__people">
//                      <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                      <div class="opdx__info">
//                                     <p class="opdx__desk">№1 <br> 30.08. <br>  2019г</p>
//                                     <h3 class="opdx__info-title">Садыков К. Баткен</h3>
//                                 </div>
//                 </div>
//                 <table class="opdx__table">
//                     <tr class="opdx__tr">
//                                     <td class="opdx__td" colspan="5">
//                                         Наименование хозяйства: "Топоз-Баткен";
//                                     </td>
//                                 </tr>
//                     <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Продукт
//                                     </td>
//                                     <td class="opdx__td">
//                                         Общая Га орг. Земли
//                                     </td>
//                                     <td class="opdx__td">
//                                         Количество Животных
//                                     </td>
//                                     <td class="opdx__td">
//                                         Производство(в тоннах/штук)
//                                     </td>
//                                     <td class="opdx__td">
//                                         Экспорт(в тоннах)
//                                     </td>
//                                 </tr>
//                     <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Як
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         700
//                                     </td>
//                                     <td class="opdx__td">
//                                         6 мяса
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                     <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Абрикос
//                                     </td>
//                                     <td class="opdx__td">
//                                         5
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         50
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                     <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Яблоко
//                                     </td>
//                                     <td class="opdx__td">
//                                         2
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         20
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                 </table>
//            </div>
//             </div>
//
//         `
//         } else if (maker === 'курсанбаев кадамжай') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                         <div class="opdx__cart">
//                             <div class="opdx__people">
//                                 <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                                 <div class="opdx__info">
//                                     <p class="opdx__desk">№2 <br> 30.08. <br> 2019г</p>
//                                     <h3 class="opdx__info-title">Курсанбаев  Кадамжай</h3>
//                                 </div>
//                             </div>
//                             <table class="opdx__table">
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td" colspan="5">
//                                         Наименование хозяйства: "Орозбек";
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Продукт
//                                     </td>
//                                     <td class="opdx__td">
//                                         Общая Га орг. Земли
//                                     </td>
//                                     <td class="opdx__td">
//                                         Количество животных
//                                     </td>
//                                     <td class="opdx__td">
//                                         Производство(в тоннах/штук)
//                                     </td>
//                                     <td class="opdx__td">
//                                         Экспорт(в тоннах)
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Корова
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         58
//                                     </td>
//                                     <td class="opdx__td">
//                                         7 мяса, 25 молока
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Абрикос
//                                     </td>
//                                     <td class="opdx__td">
//                                         6
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         60
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Яблоко
//                                     </td>
//                                     <td class="opdx__td">
//                                         10
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         100
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//      `
//         }else if (maker === 'акматалиев баткен') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                         <div class="opdx__cart">
//                             <div class="opdx__people">
//                                 <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                                 <div class="opdx__info">
//                                     <p class="opdx__desk">№18</p>
//                                     <h3 class="opdx__info-title">Акматалиев Баткен</h3>
//                                 </div>
//                             </div>
//                             <table class="opdx__table">
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td" colspan="5">
//                                         Наименование хозяйства: Алыш-Дан;
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Продукт
//                                     </td>
//                                     <td class="opdx__td">
//                                         Общая Га орг. Земли
//                                     </td>
//                                     <td class="opdx__td">
//                                         Количество животных
//                                     </td>
//                                     <td class="opdx__td">
//                                         Производство(в тоннах/штук)
//                                     </td>
//                                     <td class="opdx__td">
//                                         Экспорт(в тоннах)
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Абрикос/Сушеный абрикос
//                                     </td>
//                                     <td class="opdx__td">
//                                         100
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         70(Абр.)/80(Суш.А.)
//                                     </td>
//                                     <td class="opdx__td">
//                                         130
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Яблоко
//                                     </td>
//                                     <td class="opdx__td">
//                                         25
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         250
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//      `
//         }else if (maker === 'абдиназаров лейлек') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                         <div class="opdx__cart">
//                             <div class="opdx__people">
//                                 <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                                 <div class="opdx__info">
//                                     <p class="opdx__desk">№4 <br> 30.08. <br> 2019г</p>
//                                     <h3 class="opdx__info-title">Абдиназаров Лейлек</h3>
//                                 </div>
//                             </div>
//                             <table class="opdx__table">
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td" colspan="5">
//                                         Наименование хозяйства: "Кутчу-Дан";
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Продукт
//                                     </td>
//                                     <td class="opdx__td">
//                                         Общая Га орг. Земли
//                                     </td>
//                                     <td class="opdx__td">
//                                         Количество животных
//                                     </td>
//                                     <td class="opdx__td">
//                                         Производство(в тоннах/штук)
//                                     </td>
//                                     <td class="opdx__td">
//                                         Экспорт(в тоннах)
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Корова/Овцы/Лошадь
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         410
//                                     </td>
//                                     <td class="opdx__td">
//                                         5 мяса
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Курица
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         600
//                                     </td>
//                                     <td class="opdx__td">
//                                         48000 яйиц
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Пшеница
//                                     </td>
//                                     <td class="opdx__td">
//                                         2
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         22
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Яблоко
//                                     </td>
//                                     <td class="opdx__td">
//                                         1
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         13
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//      `
//         }else if (maker === 'базарбаев лейлек') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№5 <br> 30.08. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Базарбаев С. Лейлек</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Гордой";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     14
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     18
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'акбаров лейлек') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                         <div class="opdx__cart">
//                             <div class="opdx__people">
//                                 <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                                 <div class="opdx__info">
//                                     <p class="opdx__desk">№3 <br> 30.08. <br> 2019г</p>
//                                     <h3 class="opdx__info-title">Акбаров Ш. Лейлек</h3>
//                                 </div>
//                             </div>
//                             <table class="opdx__table">
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td" colspan="5">
//                                         Наименование хозяйства: "Нектар-Алга";
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Продукт
//                                     </td>
//                                     <td class="opdx__td">
//                                         Общая Га орг. Земли
//                                     </td>
//                                     <td class="opdx__td">
//                                         Количество животных
//                                     </td>
//                                     <td class="opdx__td">
//                                         Производство(в тоннах/штук)
//                                     </td>
//                                     <td class="opdx__td">
//                                         Экспорт(в тоннах)
//                                     </td>
//                                 </tr>
//                                 <tr class="opdx__tr">
//                                     <td class="opdx__td">
//                                         Персик
//                                     </td>
//                                     <td class="opdx__td">
//                                         12
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                     <td class="opdx__td">
//                                         10
//                                     </td>
//                                     <td class="opdx__td">
//                                         -
//                                     </td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//      `
//         }else if (maker === 'рахматов ала-бука') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№16 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Рахматов Х. Ала-Бука</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'тойчуев ала-бука') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№22 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Тойчуев Ж. Ала-Бука</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Бургандуу" СКХ;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Перец
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     28
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'бекмуратов аксы') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№19</p>
//                                 <h3 class="opdx__info-title">Бекмуратов А. Аксы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4,8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'кабыланов аксы') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№20</p>
//                                 <h3 class="opdx__info-title">Кабыланов Ж. Аксы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     7,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'калилова аксы') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№21 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Калилова П. Аксы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Калилова;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'сулайманов ноокен') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№17</p>
//                                 <h3 class="opdx__info-title">Сулайманов Э. Ноокенский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Бургандуу" СКХ;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Помидор
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     21
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Перец
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     78
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'абдуримов ноокен') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№23</p>
//                                 <h3 class="opdx__info-title">Абдуримов Т. Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Бургандуу" СКХ;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Перец
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     78
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'азизов ноокен') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№24 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Азизов Э. Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Перец
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     39
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'араббаев ноокен') {
//             s.innerHTML += `
//                                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№25</p>
//                                 <h3 class="opdx__info-title">Араббаев О. Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,61
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
//      `
//         }else if (maker === 'бекжанов ноокен') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№26 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Бекжанов А Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,19
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'камилов ноокен') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№27 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Камилов У Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Помидор
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     17
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'мамадиев ноокен') {
//             s.innerHTML += `
//                                   <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№28 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Мамадиев М Ноокен</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Мамадиев;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
//      `
//         }else if (maker === 'рахманов сузак') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№29 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Рахманов Ш Сузак</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,37
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'халдаров сузак') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№30 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Халдаров Р Сузак</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Биофермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Хлопок
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     7,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'иманов сузак') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№31</p>
//                                 <h3 class="opdx__info-title">Иманов А  Сузак</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Иманов А;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Плодовый сад
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,51
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'казбеков сузак') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№32 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Казбеков Э Сузак</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Казбеков Э;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     35
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'авилов сузак') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№33</p>
//                                 <h3 class="opdx__info-title">Авилов Т Сузак</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Авилов Т;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Огурец
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     72
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Помидор
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лимон
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'рысбеков чаткал') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№34</p>
//                                 <h3 class="opdx__info-title">Рысбеков Н Чаткал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Рыспеков Н;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'заирбеков') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Заирбеков</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: СТСК "Ишкер-Кей Джи";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     прерработка лесного производства
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'кадыров арстанбап') {
//             s.innerHTML += `
//                                <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Кадыров Э, <br> Базар-Коргон р-н, <br> с. Арстанбап</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Переработка орех, производство орех-е масло
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Орех
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
//      `
//         }else if (maker === 'сатыбаев алай') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№35 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Сатыбаев М. Алай</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Чотон";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Чеснок
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     300
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'сайпидинов араван') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№36 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Сайпидинов Ш. Араван</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Агросервис" КСХ;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     140
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     600
//                                 </td>
//                                 <td class="opdx__td">
//                                     600
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'туркбаев кара-суу') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№37 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Туркбаев Б. Кара-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Туркбаев Бекташ" ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овощной
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'жумабаев кара-кулжа') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№38 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Жумабаев М. Кара-Кулжа</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: к/х "Жумабаев Маматкадыр";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Рассада
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'култаев озгон') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№39 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Култаев М. Озгон</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Болшевик багбандар биримдиги";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'абдырахманов озгон') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№40 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Абдырахманов С. Озгон</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Сагын фермер ынтымактуу" К/Х;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Теплица
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'марипов ноокат') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№41 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Марипов Т. Ноокат</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Кызыр-Ата";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'сулайманов чон-алай') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№42 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Сулайманов Э. Чон-Алай</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Экоазык-түлүк" к/х;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     140
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     120
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'курбаналиев ош') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№43 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Курбаналиев Н. г.Ош</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овощной
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,57
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'исраилов алай') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№44 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Исраилов Э. Алай</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Агатан" живодновод.;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     1 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'токтасинов араван') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№45 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Токтасинов Ш. Араван</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Техник осеменатор";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Козы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     61
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'токуров кара-суу') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№46 <br> 30.09. <br>  2019г</p>
//                                 <h3 class="opdx__info-title">Токуров М. Кара-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Чолпонай Асыл Тукум";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     70
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     40
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'кадырбаев кара-суу') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№47 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Кадырбаев Э. Кара-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Кадырбаев Эргеш" животновод;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     270
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'маматов кара-суу') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№48 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Маматов Т. Кара-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Таирбек";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'хайдаров ноокат') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№49 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Хайдаров М. Ноокат</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Чарбадар";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     80
//                                 </td>
//                                 <td class="opdx__td">
//                                     3 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'патаев чон-алай') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№50 <br> 30.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Патаев Э. Чон-Алай</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Наркул";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Як
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     250
//                                 </td>
//                                 <td class="opdx__td">
//                                     5 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     200
//                                 </td>
//                                 <td class="opdx__td">
//                                     2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,4 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     40
//                                 </td>
//                                 <td class="opdx__td">
//                                     1 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Верблюд
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'эргешов ош') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№79 <br> 04.03. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Эргешов А. г.Ош</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,35
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'кадыров кара-суу') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№108 <br> 15.04. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Н.Кадыров Кара-Суу р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: “Асатулла Ата” кооператив;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Плодовый сад
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     200 тыс. рассад
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//      `
//         }else if (maker === 'шорукова талас') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№67 <br> 13.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Шорукова Р. Талас</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Перец
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'омурсаков кара-буура') {
//             s.innerHTML += `
//           <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№68 <br> 13.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Омурсаков Б. Кара-Буура</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     350
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Козы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     60
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Рыба
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6000
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Свекла
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'токтогулова кара-буура') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№69 <br> 13.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Токтогулова Г. Кара-Буура</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лук
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Помидор
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     14
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'мырзагулов кара-буура') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№71 <br> 13.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Мырзагулов О. Кара-Буура</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Слива
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'айдаралиев манас') {
//             s.innerHTML += `
//         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№72 <br> 13.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Айдаралиев И. Манас</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абдылдаев кара-бууринский') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Абдылдаев А Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'мырзатаев кара-бууринский') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Мырзатаев Ж Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'бокуев бакай-ата') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Бокуев К. Бакай-Ата</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'каныбек уулу жылдызбек кара-буура') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№6</p>
//                                 <h3 class="opdx__info-title">Каныбек уулу Ж. Кара-Буура</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Жылдызбек";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'сулайманов бакай-атинский') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Сулайманов С Бакай-Атинский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абдылдаев кара-бууринский') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Абдылдаев А Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                    -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     70
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'умарбеков кара-бууринский') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Умарбеков Ж Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     50
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'торогелдиев кара-бууринский') {
//             s.innerHTML += `                
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Торогелдиев Т Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Слива
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'дубанаев кара-бууринский') {
//             s.innerHTML += `            
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Дубанаев Б Кара-Бууринский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Слива
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Фасоль
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'алжанбаев кочкор') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№107 <br> 20.08. <br> 2021</p>
//                                 <h3 class="opdx__info-title">Алжанбаев Ж. Кочкор</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Доскулу";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,4 Мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'мусаканов ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№108 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Мусаканов М. Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Ырыс";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                    1 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     88
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'сыяев ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№106 <br> 20.08. <br> 2021</p>
//                                 <h3 class="opdx__info-title">Сыяев Т. Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Кереге";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     26
//                                 </td>
//                                 <td class="opdx__td">
//                                     2 Мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     35
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     60
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     35
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     55
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'карыпбеков нарын') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№113</p>
//                                 <h3 class="opdx__info-title">Карыпбеков А. Нарын</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Улгу";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     42
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     25
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     40
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'керимбаев нарын') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№105 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Керимбаев Э. Нарын</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Калча";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Коза
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     50
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     75
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     87
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     148
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'казиев ак-талаа') {
//             s.innerHTML += `
//               <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№9 <br> 20.08. <br> 2021</p>
//                                 <h3 class="opdx__info-title">Казиев Э. Ак-Талаа</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Эрлан-К";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овца
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     60
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     96
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     55
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     60
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     70
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'бексултанов ак-талаа') {
//             s.innerHTML += `
//         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№15 <br> 20.08. <br> 2021</p>
//                                 <h3 class="opdx__info-title">Бексултанов А. Ак-Талаа</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Жакаш";
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овца
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     31
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 Мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     18
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     17
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     42
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'молдобасаров жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Молдобасаров Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     35
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     32
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'шамбеков жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№102</p>
//                                 <h3 class="opdx__info-title">Шамбеков А. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     50
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'кулманов жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№101 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Кулманов А. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овца
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     11
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'жээналиев жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Жээналиев Т. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     45
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     40
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'нураалы уулу жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№100 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Нураалы уулу Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абакиров кочкор') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Абакиров Р. Кочкор</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     14
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'момуналиев ат-башы') {
//             s.innerHTML += `
//                     <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№99 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Момуналиев Б. Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     200
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     42
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'токтоналиев жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№103 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Токтоналиев Т. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     7,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     16
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     7,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'осмоналиев кочкор') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№104 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Осмоналиев Р. Кочкор</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2 мяса
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     58
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     18
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     19
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'шакиров жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№109 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Шакиров С. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Козы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'алапаев жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№110 <br> 20.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Алапаев Т.А. Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Ч/Ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Козы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Курицы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'асаналиев жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№76 <br> 10.02. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Асаналиев С Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Биогумус
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'осмонов кочкор') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№92 <br> 16.07. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Осмонов Р Кочкор</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     16
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Биогумус
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абдылдаев жумгал') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"> №89 <br> 16.07. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Абдылдаев А Жумгал</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Биогумус
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'джоошев') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№123 <br> 11.07. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Джоошев Д.К.</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'ураймахун ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№125 <br> 03.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Ураймахун у.М Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     80
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'эшманбетов ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№127 <br> 03.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Эшманбетов У Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//         `
//         }else if (maker === 'молдобаев ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№132 <br> 25.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Молдобаев А Ат-Башы </h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'айыпов ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№126 <br> 11.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Айыпов А Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'алтыбай ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№128 <br> 15.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Алтыбай у Б Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'уркунчиев ат-башы') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№130 <br> 15.08. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Уркунчиев К Ат-Башы</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     1,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     21
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Теплица
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Биогумус
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'маамытов кочкор') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№143 <br> 10.04. <br> 2023г</p>
//                                 <h3 class="opdx__info-title">Маамытов М Кочкорский р-н</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Корова
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     18
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овцы
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     25
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лошадь
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'кудайбергенов') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Кудайбергенов К</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     11
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     23
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абдыжапаров') {
//             s.innerHTML += `
//                         <div class="swiper-slide">
//                   <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <img src="../images/opdx/people.svg" alt="people" class="opdx__people-img">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk"></p>
//                                 <h3 class="opdx__info-title">Абдыжапаров С</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Азим-С;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     9
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     8
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     14
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'абылкасымов жети-огуз') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№7 <br> 13.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Абылкасымов Жети-Огуз</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Кут Дарак" ОсОО;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     13
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
// `
//         }else if (maker === 'сарыгулов жети-огуз') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№8</p>
//                                 <h3 class="opdx__info-title">Сарыгулов Т. Жети-Огуз</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Тосор-Мурутчан;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Абрикос
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
// `
//         }else if (maker === 'бектемиров ак-суу') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№10</p>
//                                 <h3 class="opdx__info-title">Бектемиров И. Ак-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Имаш;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Пшеница
//                                 </td>
//                                 <td class="opdx__td">
//                                     5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,4
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'молдогазиев тон') {
//             s.innerHTML += `
//                   <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№12 <br> 13.09. <br> 2019г</p>
//                                 <h3 class="opdx__info-title">Молдогазиев Тон</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Албан Асем;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Кукуруза
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     30
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Ячмень
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     7
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Абрикос
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,5
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     15
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     236,02
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     892
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
// `
//         }else if (maker === 'рысмендиева ак-суу') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№85 <br> 17.04. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Рысмендиева А.  Ак-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Ак-Суу органик" кооператив ;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     300
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     3000
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Абрикос
//                                 </td>
//                                 <td class="opdx__td">
//                                     210
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     950
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'касымов ак-суу') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№93 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Касымов М. Ак-Суу р-у</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Темирлан Агросервис" кооператив Ак-Суу р-у;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     60
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'базаркулов жети-огуз') {
//             s.innerHTML += `
//                <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№94 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Базаркулов Т.  Жети-Огуз р-у</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Тосор органик" кооператив Жети-Огуз р-у;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Абрикос
//                                 </td>
//                                 <td class="opdx__td">
//                                     50
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     250
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     44
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     264
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овощной
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     200
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     100
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     500
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
// `
//         }else if (maker === 'шаршембиев туп') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№95 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Шаршембиев  Э. Түп р-у</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Теплица;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Теплица
//                                 </td>
//                                 <td class="opdx__td">
//                                     0,04
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     2
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'билалова ысык-көл') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№96 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Билалова Жаңыл Ысык-Көл р-у</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Люцерна
//                                 </td>
//                                 <td class="opdx__td">
//                                     2,1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     12
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'токомбаев ак-суу') {
//             s.innerHTML += `
//                  <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№97 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Токомбаев А. АК-Суу</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Маман органик" кооператив Ак-Суйский р-у;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Абрикос
//                                 </td>
//                                 <td class="opdx__td">
//                                     110
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     550
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овощной
//                                 </td>
//                                 <td class="opdx__td">
//                                     110
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     220
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Яблоко
//                                 </td>
//                                 <td class="opdx__td">
//                                     120
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     600
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//
//        `
//         }else if (maker === 'букараев элдияр тон') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№98 <br> 10.08. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Букараев  Элдияр  Тон</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: к/х "Бухара" Тоң р-у;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Картошка
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Овощной
//                                 </td>
//                                 <td class="opdx__td">
//                                     4,55
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'жылтырова сонунгүл ак-суу') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№112 <br> 27.09. <br> 2021г</p>
//                                 <h3 class="opdx__info-title">Жылтырова Сонунгүл  Ак-Суу р-у</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: "Ысык-Куль органик" кооператив;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лекарствиные травы
//                                 </td>
//                                 <td class="opdx__td">
//                                     29
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     70
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'дуйшебаева айсулуу ысык-көл') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№117 <br> 15.04. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Дуйшебаева Айсулуу Ысык-Көл району</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: Жеке фермер;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Плодовый сад
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     10
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Лекарствиные травы
//                                 </td>
//                                 <td class="opdx__td">
//                                     1
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     6
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//
//                         </table>
//                     </div>
//                 </div>
// `
//         }else if (maker === 'ногоев ысык-кол') {
//             s.innerHTML += `
//                 <div class="swiper-slide">
//                     <div class="opdx__cart">
//                         <div class="opdx__people">
//                             <div class="opdx__info">
//                                 <p class="opdx__desk">№121 <br> 10.06. <br> 2022г</p>
//                                 <h3 class="opdx__info-title">Ногоев Н Ысык-Кол</h3>
//                             </div>
//                         </div>
//                         <table class="opdx__table">
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td" colspan="5">
//                                     Наименование хозяйства: ч/ф;
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Продукт
//                                 </td>
//                                 <td class="opdx__td">
//                                     Общая Га орг. Земли
//                                 </td>
//                                 <td class="opdx__td">
//                                     Количество Животных
//                                 </td>
//                                 <td class="opdx__td">
//                                     Производство(в тоннах/штук)
//                                 </td>
//                                 <td class="opdx__td">
//                                     Экспорт(в тоннах)
//                                 </td>
//                             </tr>
//                             <tr class="opdx__tr">
//                                 <td class="opdx__td">
//                                     Плодовый сад
//                                 </td>
//                                 <td class="opdx__td">
//                                     3
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                                 <td class="opdx__td">
//                                     20
//                                 </td>
//                                 <td class="opdx__td">
//                                     -
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
// `
//         }else {
//             s.innerHTML += `
//                     <h1 class="title">ничего не найдено</h1>
//         `
//         }
//
//     }

    const handleSubmit = (e) => {
        e.preventDefault();
        // findMaker(inputValue.toLowerCase());
    };

    return (
        <section className="opdx">
            {/*<form onSubmit={handleSubmit} className="opdx__form">*/}
            {/*    <label>*/}
            {/*        <select className="year__select">*/}
            {/*            <option value="2022" className="year__option">2022</option>*/}
            {/*        </select>*/}
            {/*    </label>*/}
            {/*    <label className="opdx__label">*/}
            {/*        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="opdx__input"/>*/}
            {/*    </label>*/}
            {/*    <button type="submit" className="opdx__btn">Найти</button>*/}
            {/*</form>*/}
            <h1 className="title">
                Информация по пилотным хозяйствам ДОСХ 2023г.
            </h1>
            <h2 className="opdx__title">Баткенская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                <div className="swiper-slide">
                    <div className="opdx__cart">
                        <div className="opdx__people">
                            <img src="" alt="people" className="opdx__people-img"/>
                            <div className="opdx__info">
                                <p className="opdx__desk">№1 <br/> 30.08. <br/> 2019г</p>
                                <h3 className="opdx__info-title">Садыков К. Баткен</h3>
                            </div>
                        </div>
                        <table className="opdx__table">
                            <tr className="opdx__tr">
                                <td className="opdx__td" colSpan="5">
                                    Наименование хозяйства: "Топоз-Баткен";
                                </td>
                            </tr>
                            <tr className="opdx__tr">
                                <td className="opdx__td">
                                    Продукт
                                </td>
                                <td className="opdx__td">
                                    Общая Га орг. Земли
                                </td>
                                <td className="opdx__td">
                                    Количество Животных
                                </td>
                                <td className="opdx__td">
                                    Производство(в тоннах/штук)
                                </td>
                                <td className="opdx__td">
                                    Экспорт(в тоннах)
                                </td>
                            </tr>
                            <tr className="opdx__tr">
                                <td className="opdx__td">
                                    Як
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                                <td className="opdx__td">
                                    700
                                </td>
                                <td className="opdx__td">
                                    6 мяса
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                            </tr>
                            <tr className="opdx__tr">
                                <td className="opdx__td">
                                    Абрикос
                                </td>
                                <td className="opdx__td">
                                    5
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                                <td className="opdx__td">
                                    50
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                            </tr>
                            <tr className="opdx__tr">
                                <td className="opdx__td">
                                    Яблоко
                                </td>
                                <td className="opdx__td">
                                    2
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                                <td className="opdx__td">
                                    20
                                </td>
                                <td className="opdx__td">
                                    -
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <img src="../src/images/opdx/people.svg" alt="people" className="opdx__people-img"/>
                                <div className="opdx__info">
                                    <p className="opdx__desk">№2 <br/> 30.08. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Курсанбаев Кадамжай</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Орозбек";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        58
                                    </td>
                                    <td className="opdx__td">
                                        7 мяса, 25 молока
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№18</p>
                                    <h3 className="opdx__info-title">Акматалиев Баткен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Алыш-Дан;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос/Сушеный абрикос
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70(Абр.)/80(Суш.А.)
                                    </td>
                                    <td className="opdx__td">
                                        130
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        250
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№4 <br/> 30.08. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Абдиназаров Лейлек</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Кутчу-Дан";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова/Овцы/Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        410
                                    </td>
                                    <td className="opdx__td">
                                        5 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Курица
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                    <td className="opdx__td">
                                        48000 яйиц
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        22
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№5 <br/> 30.08. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Базарбаев С. Лейлек</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Гордой";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№3 <br/> 30.08. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Акбаров Ш. Лейлек</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Нектар-Алга";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Персик
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 6 пилоттук хоз.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Курица
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                    <td className="opdx__td">
                                        48000 яйиц
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        64
                                    </td>
                                    <td className="opdx__td">
                                        7 мяса, 25 молока
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Як
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        700
                                    </td>
                                    <td className="opdx__td">
                                        6 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        111
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        38
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Персик
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title">Иссык-Кульская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№7 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Абылкасымов Жети-Огуз</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Кут Дарак" ОсОО;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№8</p>
                                    <h3 className="opdx__info-title">Сарыгулов Т. Жети-Огуз</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Тосор-Мурутчан;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№10</p>
                                    <h3 className="opdx__info-title">Бектемиров И. Ак-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Имаш;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№12 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Молдогазиев Тон</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Албан Асем;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        236,02
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        892
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№85 <br/> 17.04. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Рысмендиева А. Ак-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Ак-Суу органик" кооператив ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        300
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3000
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        210
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        950
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№93 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Касымов М. Ак-Суу р-у</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Темирлан Агросервис" кооператив Ак-Суу р-у;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№94 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Базаркулов Т. Жети-Огуз р-у</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Тосор органик" кооператив Жети-Огуз р-у;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        50
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        250
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        44
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        264
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        200
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        500
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№95 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Шаршембиев Э. Түп р-у</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Теплица;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        0,04
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№96 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Билалова Жаңыл Ысык-Көл р-у</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        2,1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№97 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Токомбаев А. АК-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Маман органик" кооператив Ак-Суйский р-у;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        110
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        550
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        110
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        220
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        120
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№98 <br/> 10.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Букараев Элдияр Тон</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: к/х "Бухара" Тоң р-у;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        4,55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№112 <br/> 27.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Жылтырова Сонунгүл Ак-Суу р-у</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Ысык-Куль органик" кооператив;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лекарствиные травы
                                    </td>
                                    <td className="opdx__td">
                                        29
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№117 <br/> 15.04. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Дуйшебаева Айсулуу Ысык-Көл району</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Жеке фермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лекарствиные травы
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№121 <br/> 10.06. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Ногоев Н Ысык-Кол</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№122 <br/> 10.06. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Саткангулова К Ысык-Кол</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№124 <br/> 20.07. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Джакшылыкова А Ысык-Кол</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,02
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 16 пилоттук хоз.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        301
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3001
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Абрикос
                                    </td>
                                    <td className="opdx__td">
                                        374
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1772
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        49,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        297
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        38
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        0,04
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        214,55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        421
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лекар. Травы
                                    </td>
                                    <td className="opdx__td">
                                        31
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        84
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        214,55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        421
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title">Жалал-Абадская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№16 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Рахматов Х. Ала-Бука</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№22 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Тойчуев Ж. Ала-Бука</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Бургандуу" СКХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        28
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№19</p>
                                    <h3 className="opdx__info-title">Бекмуратов А. Аксы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№20</p>
                                    <h3 className="opdx__info-title">Кабыланов Ж. Аксы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№21 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Калилова П. Аксы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Калилова;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№17</p>
                                    <h3 className="opdx__info-title">Сулайманов Э. Ноокенский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Бургандуу" СКХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        1,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        21
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        0,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        78
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№23</p>
                                    <h3 className="opdx__info-title">Абдуримов Т. Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Бургандуу" СКХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        78
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№24 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Азизов Э. Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        39
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№25</p>
                                    <h3 className="opdx__info-title">Араббаев О. Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        2,61
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№26 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Бекжанов А Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        1,19
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№27 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Камилов У Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        17
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№28 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Мамадиев М Ноокен</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Мамадиев;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№29 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Рахманов Ш Сузак</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        0,37
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        0,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№30 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Халдаров Р Сузак</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Биофермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        1,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№31</p>
                                    <h3 className="opdx__info-title">Иманов А Сузак</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Иманов А;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        0,51
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№32 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Казбеков Э Сузак</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Казбеков Э;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№33</p>
                                    <h3 className="opdx__info-title">Авилов Т Сузак</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Авилов Т;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Огурец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        72
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лимон
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№34</p>
                                    <h3 className="opdx__info-title">Рысбеков Н Чаткал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Рыспеков Н;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Заирбеков</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: СТСК "Ишкер-Кей Джи";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        прерработка лесного производства
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Кадыров Э, <br/> Базар-Коргон р-н, <br/> с.
                                        Арстанбап</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Переработка орех, производство орех-е масло
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Орех
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 20 пилоттук хоз.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Огурец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        72
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Орех
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        2,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        41,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        3,56
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        36
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лимон
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        4,1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        223
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Хлопок
                                    </td>
                                    <td className="opdx__td">
                                        8,51
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        38,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        0,51
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        3,1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title">Ошская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№35 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Сатыбаев М. Алай</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Чотон";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Чеснок
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        300
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№36 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Сайпидинов Ш. Араван</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Агросервис" КСХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        140
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№37 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Туркбаев Б. Кара-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Туркбаев Бекташ" ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№38 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Жумабаев М. Кара-Кулжа</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: к/х "Жумабаев Маматкадыр";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Рассада
                                    </td>
                                    <td className="opdx__td">
                                        2,1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№39 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Култаев М. Озгон</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Болшевик багбандар биримдиги";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№40 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Абдырахманов С. Озгон</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Сагын фермер ынтымактуу" К/Х;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№41 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Марипов Т. Ноокат</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Кызыр-Ата";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№42 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Сулайманов Э. Чон-Алай</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Экоазык-түлүк" к/х;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        140
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        120
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№43 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Курбаналиев Н. г.Ош</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        0,57
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№44 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Исраилов Э. Алай</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Агатан" живодновод.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№45 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Токтасинов Ш. Араван</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Техник осеменатор";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        0,3 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        61
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№46 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Токуров М. Кара-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Чолпонай Асыл Тукум";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№47 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Кадырбаев Э. Кара-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Кадырбаев Эргеш" животновод;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        270
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№48 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Маматов Т. Кара-Суу</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Таирбек";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№49 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Хайдаров М. Ноокат</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Чарбадар";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        80
                                    </td>
                                    <td className="opdx__td">
                                        3 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№50 <br/> 30.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Патаев Э. Чон-Алай</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Наркул";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Як
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        250
                                    </td>
                                    <td className="opdx__td">
                                        5 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        200
                                    </td>
                                    <td className="opdx__td">
                                        2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        0,4 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Верблюд
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№79 <br/> 04.03. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Эргешов А. г.Ош</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№108 <br/> 15.04. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Н.Кадыров Кара-Суу р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: “Асатулла Ата” кооператив;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        200 тыс. рассад
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 18 пилоттук хоз.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Як
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        250
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        653
                                    </td>
                                    <td className="opdx__td">
                                        6,3 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        172
                                    </td>
                                    <td className="opdx__td">
                                        0,8 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        61
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Верблюд
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        141
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        121
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Чеснок
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        300
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        140
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                    <td className="opdx__td">
                                        600
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        200 тыс. рассад
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        2,57
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        5,35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        22
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title">Чуйская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="opdx__cart">
                                <div className="opdx__people">
                                    <div className="opdx__info">
                                        <p className="opdx__desk">№51 <br/> 13.09. <br/> 2019г</p>
                                        <h3 className="opdx__info-title">Будайтиев К. Кемин</h3>
                                    </div>
                                </div>
                                <table className="opdx__table">
                                    <tr className="opdx__tr">
                                        <td className="opdx__td" colSpan="5">
                                            Наименование хозяйства: Ч/Ф;
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Продукт
                                        </td>
                                        <td className="opdx__td">
                                            Общая Га орг. Земли
                                        </td>
                                        <td className="opdx__td">
                                            Количество животных
                                        </td>
                                        <td className="opdx__td">
                                            Производство(в тоннах/штук)
                                        </td>
                                        <td className="opdx__td">
                                            Экспорт(в тоннах)
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Кукуруза
                                        </td>
                                        <td className="opdx__td">
                                            7
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                        <td className="opdx__td">
                                            70
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Ячмень
                                        </td>
                                        <td className="opdx__td">
                                            7
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                        <td className="opdx__td">
                                            14
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="opdx__cart">
                                <div className="opdx__people">
                                    <div className="opdx__info">
                                        <p className="opdx__desk">№52 <br/> 13.09. <br/> 2019г</p>
                                        <h3 className="opdx__info-title">Абдыраимов Т. Кемин</h3>
                                    </div>
                                </div>
                                <table className="opdx__table">
                                    <tr className="opdx__tr">
                                        <td className="opdx__td" colSpan="5">
                                            Наименование хозяйства: Ч/Ф;
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Продукт
                                        </td>
                                        <td className="opdx__td">
                                            Общая Га орг. Земли
                                        </td>
                                        <td className="opdx__td">
                                            Количество животных
                                        </td>
                                        <td className="opdx__td">
                                            Производство(в тоннах/штук)
                                        </td>
                                        <td className="opdx__td">
                                            Экспорт(в тоннах)
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Картошка
                                        </td>
                                        <td className="opdx__td">
                                            3
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                        <td className="opdx__td">
                                            30
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Пшеница
                                        </td>
                                        <td className="opdx__td">
                                            2
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                        <td className="opdx__td">
                                            5
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                    </tr>
                                    <tr className="opdx__tr">
                                        <td className="opdx__td">
                                            Люцерна
                                        </td>
                                        <td className="opdx__td">
                                            2
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                        <td className="opdx__td">
                                            10
                                        </td>
                                        <td className="opdx__td">
                                            -
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№53 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Долотбаков К. Чуй</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№54 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Уракунов Т. Чуй</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№55 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Зиновьев Я. Ысык-Ата</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "СХ Завета Ильича";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        50
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№56 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Иманалиев Р. Ысык-Ата</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Таза-Жан";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№57 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Алымов Д. Аламудун</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: КХ "Эко Ферма";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощная теплица
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№58 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Мустаков С. Аламудун</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Ветка" СХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        113
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        16
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№59 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Гасанов С. Сокулук</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Камал-Ата";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№60 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Базаркулов К. Сокулук</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№61 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Асадова А. Москва</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Энгельс" КХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№62 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Олейников В. Москва</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Васириюс";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        11
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№63 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Кадыркулов Р. Жайыл</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Райымбек" КХ;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        56
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        57
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№64 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Абылгазиев Н. Жайыл</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Жеке фермер;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        42
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        150
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        947
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№65 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Аксакалов М. Панфилов</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Касиет";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        44
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        84
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        113
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№66 <br/> 13.09. <br/> 2019г</p>
                                    <h3 className="opdx__info-title">Жунушалиев Б. Панфилов</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        37
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№120 <br/> 30.04. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Вологжаниной Т Ысык-Ата</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        1,18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№119 <br/> 28.04. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Нишанов М г. Кара-Балта</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        11
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        64
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№139 <br/> 04.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Токтошев Э. г. Бишкек</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        корм для рыб
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№141 <br/> 10.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Сатыбеков Н Чуйский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№144 <br/> 10.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Бекбоев Т. Ысык-Атинский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовый сад
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№145 <br/> 22.03. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">"Бирлик" г. Бишкек</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: кооператив;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        лекарственные травы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№146 <br/> 10.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Турдакунов Т Чуйский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        0,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№147 <br/> 10.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Дуйшенов Д Чуйский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1,1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 24 пилот.хоз;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Кукуруза
                                    </td>
                                    <td className="opdx__td">
                                        44,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        232,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        40,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        78,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        101,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        223,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        42
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        45,18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        159,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощная теплица
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Плодовой сад
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овощной
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1018
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корм для рыб
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title">Таласская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№67 <br/> 13.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Шорукова Р. Талас</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№68 <br/> 13.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Омурсаков Б. Кара-Буура</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        350
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Рыба
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6000
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Свекла
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№69 <br/> 13.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Токтогулова Г. Кара-Буура</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лук
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№71 <br/> 13.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Мырзагулов О. Кара-Буура</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Слива
                                    </td>
                                    <td className="opdx__td">
                                        0,4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№72 <br/> 13.09. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Айдаралиев И. Манас</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Абдылдаев А Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Мырзатаев Ж Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Бокуев К. Бакай-Ата</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№6</p>
                                    <h3 className="opdx__info-title">Каныбек уулу Ж. Кара-Буура</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Жылдызбек";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Сулайманов С Бакай-Атинский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        2,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Абдылдаев А Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Умарбеков Ж Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        50
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        2,6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Торогелдиев Т Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Слива
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Дубанаев Б Кара-Бууринский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Слива
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Яблоко
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 14 пилот.хоз;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        620
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        67
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Рыба
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6000
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лук
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Помидор
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        16
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        26
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Слива
                                    </td>
                                    <td className="opdx__td">
                                        3,9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Фасоль
                                    </td>
                                    <td className="opdx__td">
                                        27,9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Перец
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Свекла
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <h2 className="opdx__title"> Нарынская область</h2>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№107 <br/> 20.08. <br/> 2021</p>
                                    <h3 className="opdx__info-title">Алжанбаев Ж. Кочкор</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Доскулу";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество Животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        0,3 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        0,4 Мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№108 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Мусаканов М. Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Ырыс";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        88
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№106 <br/> 20.08. <br/> 2021</p>
                                    <h3 className="opdx__info-title">Сыяев Т. Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Кереге";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        26
                                    </td>
                                    <td className="opdx__td">
                                        2 Мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№113</p>
                                    <h3 className="opdx__info-title">Карыпбеков А. Нарын</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Улгу";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        0,5 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        42
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№105 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Керимбаев Э. Нарын</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Калча";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Коза
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        50
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        75
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        87
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        148
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className ="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№9 <br/> 20.08. <br/> 2021</p>
                                    <h3 className="opdx__info-title">Казиев Э. Ак-Талаа</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Эрлан-К";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овца
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        96
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        55
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        60
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        70
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№15 <br/> 20.08. <br/> 2021</p>
                                    <h3 className="opdx__info-title">Бексултанов А. Ак-Талаа</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: "Жакаш";
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овца
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        31
                                    </td>
                                    <td className="opdx__td">
                                        0,2 Мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        17
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        42
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Молдобасаров Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        35
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        32
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№102</p>
                                    <h3 className="opdx__info-title">Шамбеков А. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        50
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№101 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Кулманов А. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овца
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        11
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Жээналиев Т. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        45
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        13
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        40
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№100 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Нураалы уулу Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Абакиров Р. Кочкор</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№99 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Момуналиев Б. Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        200
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        42
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№103 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Токтоналиев Т. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        0,5 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        7,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        16
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        7,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№104 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Осмоналиев Р. Кочкор</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        58
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        19
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№109 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Шакиров С. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№110 <br/> 20.08. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Алапаев Т.А. Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Ч/Ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        100
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Курицы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№76 <br/> 10.02. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Асаналиев С Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        0,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Биогумус
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№92 <br/> 16.07. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Осмонов Р Кочкор</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        16
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Биогумус
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"> №89 <br/> 16.07. <br/> 2021г</p>
                                    <h3 className="opdx__info-title">Абдылдаев А Жумгал</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        1,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        3,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1,8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Биогумус
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№123 <br/> 11.07. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Джоошев Д.К.</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№125 <br/> 03.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Ураймахун у.М Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        80
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№127 <br/> 03.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Эшманбетов У Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        15
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№132 <br/> 25.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Молдобаев А Ат-Башы </h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№126 <br/> 11.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Айыпов А Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        30
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№128 <br/> 15.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Алтыбай у Б Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        4
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        2,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№130 <br/> 15.08. <br/> 2022г</p>
                                    <h3 className="opdx__info-title">Уркунчиев К Ат-Башы</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        20
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        12
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        0,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        1,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        21
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Биогумус
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk">№143 <br/> 10.04. <br/> 2023г</p>
                                    <h3 className="opdx__info-title">Маамытов М Кочкорский р-н</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        18
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        25
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        10
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Кудайбергенов К</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: ч/ф;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        3
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        11
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        23
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <p className="opdx__desk"></p>
                                    <h3 className="opdx__info-title">Абдыжапаров С</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: Азим-С;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        8
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        6
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="opdx__cart">
                            <div className="opdx__people">
                                <div className="opdx__info">
                                    <h3 className="opdx__info-title">Итого:</h3>
                                </div>
                            </div>
                            <table className="opdx__table">
                                <tr className="opdx__tr">
                                    <td className="opdx__td" colSpan="5">
                                        Наименование хозяйства: 31 пилоттук хоз.;
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Продукт
                                    </td>
                                    <td className="opdx__td">
                                        Общая Га орг. Земли
                                    </td>
                                    <td className="opdx__td">
                                        Количество животных
                                    </td>
                                    <td className="opdx__td">
                                        Производство(в тоннах/штук)
                                    </td>
                                    <td className="opdx__td">
                                        Экспорт(в тоннах)
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Корова
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        75
                                    </td>
                                    <td className="opdx__td">
                                        1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Овцы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        684
                                    </td>
                                    <td className="opdx__td">
                                        0,6 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Козы
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        9
                                    </td>
                                    <td className="opdx__td">
                                        0,2 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Лошадь
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        107
                                    </td>
                                    <td className="opdx__td">
                                        4,1 мяса
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Картошка
                                    </td>
                                    <td className="opdx__td">
                                        44,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        136,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Пшеница
                                    </td>
                                    <td className="opdx__td">
                                        192,2
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        413
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Ячмень
                                    </td>
                                    <td className="opdx__td">
                                        240,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        495,7
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Люцерна
                                    </td>
                                    <td className="opdx__td">
                                        149,5
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        637
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Теплица
                                    </td>
                                    <td className="opdx__td">
                                        1
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                                <tr className="opdx__tr">
                                    <td className="opdx__td">
                                        Биогумус
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                    <td className="opdx__td">
                                        14
                                    </td>
                                    <td className="opdx__td">
                                        -
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Opdx;