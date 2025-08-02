import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Walidacja danych
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Walidacja emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy format emaila' },
        { status: 400 }
      );
    }

    // Walidacja długości
    if (body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Imię i nazwisko musi mieć co najmniej 2 znaki' },
        { status: 400 }
      );
    }

    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Wiadomość musi mieć co najmniej 10 znaków' },
        { status: 400 }
      );
    }

    // Tutaj możesz dodać rzeczywiste wysyłanie emaila
    // Na przykład używając Nodemailer, SendGrid, lub innej usługi
    
    // Symulacja wysyłania emaila
    console.log('Nowa wiadomość kontaktowa:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString()
    });

    // Symulacja opóźnienia
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Możesz tutaj dodać rzeczywiste wysyłanie emaila:
    // await sendEmail({
    //   to: 'kontakt@talko-it.pl',
    //   subject: `Nowa wiadomość od ${body.name}`,
    //   text: `
    //     Imię i nazwisko: ${body.name}
    //     Email: ${body.email}
    //     Wiadomość: ${body.message}
    //   `
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Wiadomość została wysłana pomyślnie' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Błąd podczas przetwarzania formularza:', error);
    
    return NextResponse.json(
      { 
        error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.' 
      },
      { status: 500 }
    );
  }
} 