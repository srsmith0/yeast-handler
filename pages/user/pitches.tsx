import Link from "next/link";
import AddBrew from "../../components/AddBrew";
import YeastCalendar from "../../components/YeastCalendar";
import HomeButton from "../../utils/HomeButton";

const Pitches = () => {

    //need to show brew schedule + available tanks to pitch from
        //TODO:
        //add a brew component
        //CRUD of brews
        //show yeast in column box, drag and drop to planned brew - api call to all current yeast
            //Show current brand, gen, FV
    //when assigning tanks, must have full history of yeast go to new tank
    return (
        <>
        <YeastCalendar />
        <Link href='./addbrew'>Add a Brew</Link> <HomeButton />
        </>
    )
};

export default Pitches;