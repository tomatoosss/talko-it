import { NextRequest, NextResponse } from 'next/server';

// Symulacja bazy danych użytkowników
const authorizedUsers = [
  'admin@talko-it.pl',
  'kombi.bombi@talko-it.pl',
  'test@example.com'
];

export async function POST(request: NextRequest) {
  try {
    const { email, action } = await request.json();

    if (action === 'send-code') {
      // Sprawdź czy email jest autoryzowany
      if (!authorizedUsers.includes(email)) {
        return NextResponse.json(
          { error: 'Email nie jest autoryzowany do dostępu do Magic' },
          { status: 403 }
        );
      }

      // W rzeczywistości tutaj byłaby kod wysyłający email z kodem MFA
      // Na razie zwracamy symulację
      return NextResponse.json({
        success: true,
        message: 'Kod MFA został wysłany',
        // W rzeczywistości kod byłby generowany i wysyłany email
        debugCode: '123456' // Tylko do testów!
      });
    }

    if (action === 'verify-code') {
      const { email, code } = await request.json();

      // Sprawdź czy email jest autoryzowany
      if (!authorizedUsers.includes(email)) {
        return NextResponse.json(
          { error: 'Email nie jest autoryzowany' },
          { status: 403 }
        );
      }

      // W rzeczywistości tutaj byłaby weryfikacja kodu z bazy danych
      if (code === '123456') {
        return NextResponse.json({
          success: true,
          message: 'Kod MFA zweryfikowany pomyślnie',
          token: 'magic-access-token-' + Date.now()
        });
      } else {
        return NextResponse.json(
          { error: 'Nieprawidłowy kod MFA' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Nieprawidłowa akcja' },
      { status: 400 }
    );

  } catch (error) {
    console.error('MFA API Error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
} 