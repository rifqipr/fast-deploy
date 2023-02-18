import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { supabase } from '../../lib/supabaseClient';

function Page({ samples }) {
  return (
    <ul>
      {samples.map((sample) => (
        <li key={sample.id}>{sample.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('samples').select()

  return {
    props: {
     samples: data
    },
  }
}

export default Page;