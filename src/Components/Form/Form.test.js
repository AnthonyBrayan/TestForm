import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from './Form.jsx'

describe("<Form/>",()=>{

    test("Renderizar el componente", ()=>{
        render(<Form/>);

        const labelNombre= screen.getByLabelText(/Name:/i);
        const inputNombre= screen.getByRole('textbox', {name:/Name:/i});
        const labelEmail= screen.getByLabelText(/Email:/i);
        const inputEmail= screen.getByRole('textbox', {name:/Email:/i});
        const button= screen.getByRole('button', {name:/Submit/i});

        expect(labelNombre).toBeInTheDocument();
        expect(inputNombre).toBeInTheDocument();
        expect(labelEmail).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(button).toBeInTheDocument();

    });

    test("Funcionalidad del boton enviar", ()=>{
        const alertMock = jest.fn();
        window.alert = alertMock;

        render(<Form/>);
        const inputNombre= screen.getByRole('textbox', {name:/Name:/i});
        const inputEmail= screen.getByRole('textbox', {name:/Email:/i});
        const button= screen.getByRole('button', {name:/Submit/i});

        fireEvent.change(inputNombre,{ target:{value: 'Anthony'}});
        fireEvent.change(inputEmail,{ target:{value: 'anthony@gmail.com'}});

        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalledWith('Submitted Name: Anthony, Email: anthony@gmail.com');

    });

});



