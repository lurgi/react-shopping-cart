/** @jsxImportSource @emotion/react */

import Button from "@/components/Button/Button";

interface DeleteButtonProps {
  onClick?: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <Button width="40px" onClick={onClick}>
      삭제
    </Button>
  );
};

export default DeleteButton;
