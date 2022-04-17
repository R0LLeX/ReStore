export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Лавр',
      author: 'Евгений Водолазкин',
      price: 32,
      coverImage:
        'https://primepublish.ru/content/images/new-elements/elems/step-3-15.png',
    },
    {
      id: 2,
      title: 'Дом у озера',
      author: 'Mary Kovalski',
      price: 45,
      coverImage:
        'https://thumb.tildacdn.com/tild6230-6333-4836-a636-316433643765/-/format/webp/33811877cover_330.jpg',
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
