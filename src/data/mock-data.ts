import { Image } from "../models/image";
import { Post } from "../models/post";

export class MockData{
    public static Posts: Post[] = [
        {
          userid: 1,
          id: 1,
          title: 'Neuschwanstein Castle',
          body: 'This castle is located in Bavaria, Germany. It was built by King Ludwig II of Bavaria, also known as the "Fairytale King".',
        },
        {
          userid: 2,
          id: 2,
          title: 'Eilean Donan Castle',
          body: 'This castle is located in the highlands of Scotland. It was built in the 13th century to defend against the Vikings.',
        }
      ];
      public static Images: Image[] = [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
      }
      ]
}
