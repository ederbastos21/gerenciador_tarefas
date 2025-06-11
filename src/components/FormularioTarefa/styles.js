import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`

export const Input = styled.input`
  flex: 1 1 200px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Botao = styled.button`
  padding: 0.75rem 1.5rem;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const BotaoExemplo = styled.button`
  padding: 0.75rem 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
