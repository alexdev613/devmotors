export async function getDataHome() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66abddd3d70e5c5cd3fa6317?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`, { next: { revalidate: 120 }},);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();

  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`, { next: { revalidate: 120 } });
  
    if(!res.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return res.json();

  } catch (err) {
    throw new Error("Failed to fetch menu data");
  }
}
