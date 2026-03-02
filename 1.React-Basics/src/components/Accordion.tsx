import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

function Accordion(props: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = props.items
 return (
  <div className="accordion">
    {items.map((item, index) => (
      <div
        className={`accordion-item ${
          openIndex === index ? "active" : ""
        }`}
        key={index}
      >
        <h3
          className="accordion-title"
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          {item.title}
        </h3>

        <div
          className={`accordion-content ${
            openIndex === index ? "open" : ""
          }`}
        >
          <p>{item.content}</p>
        </div>
      </div>
    ))}
  </div>
);
}

export default Accordion;