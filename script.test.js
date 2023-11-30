
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import './script';

describe('Conversor de Medidas', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('A função openList abre a lista correta', () => {
    render(document.body.innerHTML);
    const btnMedida = screen.getByText('Comprimento');
    fireEvent.click(btnMedida);

    const listaMedidas = screen.getByTestId('lista-medidas');
    expect(listaMedidas).toHaveStyle({ display: 'block' });
  });

  test('A função changeMeasure altera as medidas corretamente', () => {
    render(document.body.innerHTML);
    const btnMedida = screen.getByText('Comprimento');
    fireEvent.click(btnMedida);

    const listItem = screen.getByText('Metro');
    fireEvent.click(listItem);

    const btnFrom = screen.getByTestId('btn-from');
    const btnTo = screen.getByTestId('btn-to');

    expect(btnFrom).toHaveTextContent('Metro');
    expect(btnTo).toHaveTextContent('Metro');
  });

  test('A função convertMeasure converte as medidas corretamente', () => {
    render(document.body.innerHTML);
    const input = screen.getByPlaceholderText('Digite um valor!');
    const btnConvert = screen.getByText('Trocar unidades');

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(btnConvert);

    const result = screen.getByLabelText('resultado');
    expect(result).toHaveTextContent('10');
  });

  test('A função changePosition troca as unidades corretamente', () => {
    render(document.body.innerHTML);

    const btnFrom = screen.getByTestId('btn-from');
    const btnTo = screen.getByTestId('btn-to');
    fireEvent.click(btnFrom);
    fireEvent.click(screen.getByText('Metro'));
    fireEvent.click(btnTo);
    fireEvent.click(screen.getByText('Quilômetro'));

    const btnConvert = screen.getByText('Trocar unidades');
    fireEvent.click(btnConvert);

    expect(btnFrom).toHaveTextContent('Quilômetro');
    expect(btnTo).toHaveTextContent('Metro');
  });

  test('A função convertMeasure realiza a conversão correta', () => {
    render(document.body.innerHTML);

    const input = screen.getByPlaceholderText('Digite um valor!');
    fireEvent.change(input, { target: { value: '10' } });

    const btnFrom = screen.getByTestId('btn-from');
    const btnTo = screen.getByTestId('btn-to');
    fireEvent.click(btnFrom);
    fireEvent.click(screen.getByText('Metro'));
    fireEvent.click(btnTo);
    fireEvent.click(screen.getByText('Quilômetro'));

    const btnConvert = screen.getByText('Trocar unidades');
    fireEvent.click(btnConvert);

    const result = screen.getByLabelText('resultado');
    expect(result).toHaveTextContent('0.01');
  });
});
