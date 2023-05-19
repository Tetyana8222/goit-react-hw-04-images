import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  // background-color: rgba(221, 229, 232, 0.256);
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px 2px rgba(0, 4, 56, 0.5);
`;

export const Thumb = styled.div`
  height: 250px;
  width: 400px;
  overflow: hidden;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.15);
  }
`;
