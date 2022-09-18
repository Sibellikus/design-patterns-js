// One to many relationship. Used all over the palce like FIreBase DB/
import { Subject } from 'rxjs'

// Channel loop object
const news = new Subject();
// Creating subsciptors
const tv1 = news.subscribe(v => console.log(v + 'via SergeBlog'));
const tv2 = news.subscribe(v => console.log(v + 'via Cool TV'));
const tv3 = news.subscribe(v => console.log(v + 'via otherBadAssBroadCast'));

// Broadcast
news.next('Breaking news: ');
news.next('Marry Xmas!')