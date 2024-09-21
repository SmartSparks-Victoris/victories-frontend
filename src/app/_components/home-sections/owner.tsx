import Chart from '../shared-ui/chart';
import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const Owner = ({ admins, user }) => {
  return (
    <section className="">
      <Transition from="up">
        <h2 className="text-[#452033] text-[26px] font-semibold mb-[16px]">
          Welcome {user.name}!
        </h2>
        <p className="text-[#452033] text-[24px]">
          Connect with your customers faster and more effectively with our
          all-in-one platform
        </p>
      </Transition>
      <Transition from="right" className="flex gap-[80px] flex-wrap my-[56px]">
        <Chart
          head="Integrated Channels"
          labels={['Instagram', 'Whatsapp']}
          values={[45, 55]}
          colors={['#7E4556', '#745865']}
        />
        <Chart
          head="Customer Satisfaction"
          labels={['Positive', 'Negative', 'Neutral']}
          values={[22.5, 22.5, 55]}
          colors={['#452033', '#7E4556', '#745865']}
        />
        <Chart
          head="Categories"
          labels={['Orders', 'Feedbacks', 'Complains']}
          values={[33.3, 33.3, 33.3]}
          colors={['#452033', '#7E4556', '#745865']}
        />
      </Transition>
      <Transition from="bottom">
        <h3 className="text-[20px] font-bold text-[#452033] mb-[16px]">
          Admins overview
        </h3>
        <div className="border-[1px] border-solid border-[#452033] rounded-[26px] overflow-auto">
          <table className="owner-table w-[100%]">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tickets</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => {
                return (
                  <tr key={admin.id}>
                    <td>{admin.name}</td>
                    <td>{admin.tickets}</td>
                    <td>
                      <CustomLink href={`/admins/${admin.id}`}>Link</CustomLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Transition>
    </section>
  );
};

export default Owner;

