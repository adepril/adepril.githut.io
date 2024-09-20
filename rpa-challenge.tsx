import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [language, setLanguage] = useState('EN')

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">RPA Challenge</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>Input Forms</li>
              <li>Shortest Path</li>
              <li>Movie Search</li>
              <li>Invoice Extraction</li>
              <li>RPA Stock Market</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex">
        <aside className="w-1/4 bg-blue-700 text-white p-6">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <Button variant="outline" className="mb-2 text-white border-white">{language}</Button>
          <ol className="list-decimal list-inside space-y-2">
            <li>The goal of this challenge is to create a workflow that will input data from a spreadsheet into the form fields on the screen.</li>
            <li>Beware! The fields will change position on the screen after every submission throughout 10 rounds thus the workflow must correctly identify where each spreadsheet record must be typed every time.</li>
            <li>The actual countdown of the challenge will begin once you click the Start button until then you may submit the form as many times as you wish without receiving penalties.</li>
          </ol>
          <p className="mt-4">Good luck!</p>
          <Button variant="secondary" className="w-full mt-4">DOWNLOAD EXCEL</Button>
          <Button variant="destructive" className="w-full mt-2">START</Button>
        </aside>

        <section className="w-3/4 p-6">
          <form className="grid grid-cols-2 gap-4">
            <Input placeholder="Company Name" />
            <Input placeholder="Email" />
            <Input placeholder="Role in Company" />
            <Input placeholder="Last Name" />
            <Input placeholder="First Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Address" className="col-span-2" />
            <Button type="submit" className="col-span-2 bg-orange-500 hover:bg-orange-600">SUBMIT</Button>
          </form>
        </section>
      </main>
    </div>
  )
}