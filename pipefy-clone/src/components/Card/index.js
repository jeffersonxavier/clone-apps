import React, { useRef, useContext } from 'react';
import BoardContext from '../Board/context';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {

  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef ] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef ] = useDrop({
    accept: 'CARD',
    hover(dragged, monitor) {
      if (dragged.index === index && dragged.listIndex === listIndex)
        return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if ((dragged.index < index && draggedTop < targetCenter) ||
        (dragged.index > index && draggedTop > targetCenter))
        return;

      move(dragged.listIndex, listIndex, dragged.index, index);
      dragged.index = index;
      dragged.listIndex = listIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container isDragging={isDragging} ref={ref}>
      <header>
        {
          data.labels.map(label => <Label key={label} color={label} />)
        }
      </header>
      <p>{data.content}</p>
      { data.user && <img src={data.user} alt=""/> }
    </Container>
  );
}
