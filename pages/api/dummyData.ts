import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
  [
    {   id: 1,
            strain : "London III",
            gen : 4,
            received : "02/23/2022",
            current_tank: "FV22",
            source : "FV04",
            purchased_from : "BSI",
            quantity : "50 L",
            prop_type : "Two Step",
            count_at_pitch : "6 million cells/mL"
        
},
         {  id: 2,
            strain : "Augustiner",
            gen : 2,
            received : "03/02/2022",
            current_tank: "FV18",
            source : "FV15",
            purchased_from : "BSI",
            quantity : "70 L",
            prop_type : "Two Step",
            count_at_pitch : "8 million cells/mL"
    },
        {   id: 3,
            strain : "GO2",
            gen : 8,
            received : "01/17/2022",
            current_tank: "FV07",
            source : "FV16",
            purchased_from : "Imperial",
            quantity : "30 L",
            prop_type : "One Step",
            count_at_pitch : "6.5 million cells/mL"

    }]
)};

