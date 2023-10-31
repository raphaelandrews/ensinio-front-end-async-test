import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../hero';
import Providers from '@/app/providers';

const mockHeroInt = {
    "intro": "Plataforma all in one",
    "titulo": "Sua escola online poderosa e lucrativa",
    "subtitulo": "Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.",
    "comecar": "Começar agora",
    "video": "Ver vídeo"
}

describe('Hero', () => {
    it('renders Hero component with mock data', () => {
        render(
            <Providers>
                <Hero heroInt={mockHeroInt} />
            </Providers>
        );

        const intro = screen.getByText("Plataforma all in one");
        const heroImage = screen.getByAltText("Hero image");

        expect(intro)
        expect(heroImage)
    });
});