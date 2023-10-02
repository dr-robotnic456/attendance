import DisCard from '@/components/DisCard'
import Layout from '@/components/Layout'
import React from 'react'

const Dashboard = () => {
  return (
        <Layout>
            <div className='grid grid-cols-4 gap-2 px-5 py-10 bg-[#f1f1f1] h-screen'>
                <DisCard text={"Administration"} src={"/images/admin.png"}/>
                <DisCard text={"Accident & emergency unit"} src={"/images/ambulance.png"}/>
                <DisCard text={"medical ward"} src={"/images/bed.png"}/>
                <DisCard text={"surgical ward"} src={"/images/surgical.png"}/>
                <DisCard text={"pediatric ward"} src={"/images/pediatric.jpg"}/>
                <DisCard text={"medical records"} src={"/images/records.png"}/>
                <DisCard text={"maternity ward"} src={"/images/maternity.png"}/>
                <DisCard text={"accounts"} src={"/images/accounts.png"}/>
                <DisCard text={"pharmacy"} src={"/images/Pharmacy.png"}/>
                <DisCard text={"out-patient department"} src={"/images/opd.png"}/>
                <DisCard text={"profile"} src={"/images/Profile.png"}/>
                <DisCard text={"Administration"} src={"/images/Profile.png"}/>
            </div>
        </Layout>
  )
}

export default Dashboard