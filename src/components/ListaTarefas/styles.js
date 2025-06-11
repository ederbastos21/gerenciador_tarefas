import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f0f0f0;
    }

    span {
      flex: 1;
      cursor: default;
    }

    input {
      flex: 1;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .botoes {
      display: flex;
      gap: 0.5rem;
    }

    .btn-editar,
    .btn-remover {
      background: none;
      border: none;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }

    .btn-remover {
      color: #c62828;
    }
  }
`
