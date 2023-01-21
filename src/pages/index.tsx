import Head from "next/head";
import A from "../components/A";
import ActionButton from "../components/ActionButton";
import CancelButton from "../components/CancelButton";
import Input from "../components/Input";
import Label from "../components/Label";
import Li from "../components/Li";
import Select from "../components/Select";
import Title from "../components/Title";
import Ul from "../components/Ul";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto space-y-2 py-2">
          <Title>Title</Title>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="basis-1/2">
              <Label>Label1</Label>
              <Input />
            </div>
            <div className="basis-1/4">
              <Label>Label2</Label>
              <Input />
            </div>
            <div className="basis-1/4">
              <Label>Select</Label>
              <Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </div>
          </div>
          <div>
            <A href="#">link</A>
          </div>
          <div>
            <Label>List</Label>
            <Ul>
              <Li>Value1</Li>
              <Li>Value2</Li>
              <Li>Value3</Li>
            </Ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <CancelButton>Cancel</CancelButton>
          <ActionButton>Action</ActionButton>
        </div>
      </main>
    </>
  );
}