import {DirectoryContainer} from  "./CategoriesStyles";
import DirectoryItem from '../directory-item/DirectoryItem';

const categories = [
  {
    id: 1,
    title: "Lamps",
    imageUrl:
      "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2130/047/251/2130047251_2_7_2.jpg?t=1648136642227&imwidth=574&imformat=chrome",
    route: 'shop/lamps'
    },
  {
    id: 2,
    title: "Candles",
    imageUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/5346/065/500/5346065500_2_7_2.jpg?t=1653918974503&imwidth=1152&imformat=chrome",
      route: 'shop/candles'
    },
  {
    id: 3,
    title: "Pots",
    imageUrl:
      "https://static.zarahome.net/8/photos4/2022/I/4/1/p/1311/748/800/1311748800_2_7_2.jpg?t=1644406763662&imwidth=1152&imformat=chrome",
      route: 'shop/pots'
    },
  {
    id: 4,
    title: "Vases",
    imageUrl:
      "https://static.zarahome.net/8/photos4/2022/I/4/1/p/9369/046/990/9369046990_2_7_2.jpg?t=1651158071018&imwidth=1152&imformat=chrome",
      route: 'shop/vases'
    },
  {
    id: 5,
    title: "Mirrors",
    imageUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/b/9930/000/990/BH/NI/9930000990_1_1_2.jpg?t=1647448685017&imwidth=574",
      route: 'shop/mirrors'
    },
];

const Categories = () => {
    return (
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    );
  };

  export default Categories;