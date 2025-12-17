import { notionAcademyForm } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const NOTION_DATABASE_ID = process.env.NOTION_ACADEMY_DATABASE_ID;

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!NOTION_DATABASE_ID) {
    return NextResponse.json({ error: "Database ID not configured" }, { status: 500 });
  }

  try {
    const body = await request.json();

    await notionAcademyForm.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [{ text: { content: body.name } }],
        },
        Email: {
          email: body.email || "example@example.com",
        },
        Phone: {
          phone_number: body.number || "0123456789",
        },
        Governorate: {
          rich_text: [{ text: { content: body.governorate } }] ,
        },
        Team: {
          select: {
            name: body.team,
          },
        },
        Course: {
          rich_text: [{ text: { content: body.courses } }],
        },
        Message: {
          rich_text: [{ text: { content: body.message } }],
        },
      },
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error(error); // Log the error for debugging

    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}