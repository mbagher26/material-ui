
import { useState } from "react";

const Header = () => {
  const [showItem, setShowItem] = useState<any>("");

  const menu = [
    {
      title: "خانه",
    },
    {
      title: "دسته بندی ها",
      children: [
        {
          title: "مد و پوشاک",
        },
        {
          title: "موبایل و تبلت",
        },
        {
          title: "لوازم جانبی موبایل و کامپیوتر",
        },
        {
          title: "لب تاب",
        },
      ],
    },
    {
      title: "محصولات",
      children: [
        {
          title: "لب تاب asus",
        },
        {
          title: "لب تاب msi",
        },
        {
          title: "لب تاب hp",
        },
      ],
    },
    {
      title: "تماس با ما",
    },
    {
      title: "درباره ما",
    },
  ];

  const handleClickItem = (item:any, index:any) => {
    if (!item.children) {
      console.log("Change Route To item.url");

      return;
    }

    if (item.children) {
      setShowItem(index);
    }
  };

  return (
    <>
      <header>
        <div className="items">
          {menu.map((item, index) => (
            <>
              <div
                className="item"
                key={index}
                onClick={() => handleClickItem(item, index)}
              >
                <span>{item.title}</span>

                {item.children && showItem === index && (
                  <div className="item-menu">
                    {item.children.map((data, ii) => (
                      <div className="item-menu-list" key={ii}>
                        {data.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;

