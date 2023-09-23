import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from '@/lib/sendEmail';


export async function POST(req: Request) {
    const {name, message} = await req.json();
    sendEmail(name, message);
    return new Response('OK');

}