import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ITicket from '../../models/ITicket';
import * as services from '../../services/TicketService';
import { getTicketsDispatch } from '../../store/actions/TicketActions';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { RootState } from '../../store/store';
import TicketListItem from '../TicketListItem';

function TicketList() {
//    const dispatch = useAppDispatch();
//  const tickets: ITicket[] = useAppSelector((state: RootState) => state.tickets.tickets);

  let initialTickets: ITicket[] = [];
  const [tickets, setTickets] = useState<ITicket[]>(initialTickets)
  useEffect(() => {
    (async () => {
      setTickets(await services.getTickets());

    })();
  }, []);

  return (
    <>
      <div className="">
        <h2>Tickets</h2>
      </div>
      <div className="">
        {tickets.map((ticket) => (
          <TicketListItem
            key={ticket.TicketIndex}
            ticket={ticket}
          />
        ))}
      </div>
    </>
  );
}

export default TicketList;
