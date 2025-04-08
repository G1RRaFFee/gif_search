import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  className?: string;
  itemClassName?: string;
}

const List = <T,>({
  items,
  renderItem,
  keyExtractor,
  className,
  itemClassName,
}: ListProps<T>) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={keyExtractor ? keyExtractor(item, index) : index}
          className={itemClassName}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};

export default List;
