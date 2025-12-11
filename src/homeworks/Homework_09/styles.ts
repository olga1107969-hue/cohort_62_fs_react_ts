import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  padding: 8px 12px;
  background: #007acc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #005fa3;
  }
`;

export const NotesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NoteItem = styled.li`
  padding: 6px 8px;
  border-bottom: 1px solid #ddd;
`;
