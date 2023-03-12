
import './globals.css'
import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import directus from '../pages/api/directus';


async function getNavigation() {
  const links = await directus.items('navigation').readByQuery({
    fields: ['*.*']
  })
  return links!.data.links
}

async function getBrand() {
    const brand = await directus.items('brand').readByQuery({
        fields: ['*.*']
    })
    return brand.data
}

async function getFooter() {
    const footer = await directus.items('footer').readByQuery({
        fields: ['*.*']
    })
    return footer.data
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = await getNavigation();
  const brand = await getBrand();
  const footer = await getFooter();
  

  return (

    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav links={links} brand={brand}/>
          {children}
        <Footer footer={footer} brand={brand}/>
      </body>
    </html>

  )
}
