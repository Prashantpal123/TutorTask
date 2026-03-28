import { useState } from "react"
import TutorCard from "../components/TutorCard"
import SelectedTutors from "../components/SelectedTutors"
import { tutors } from "../Data/tutorData"
import SearchComponent from "../components/searchComponents/SearchComponent"
import Snackbar from "../components/snackbar/Snackbar"
import { motion } from "framer-motion"

const TutorListing = () => {
  const [selectedTutors, setSelectedTutors] = useState([])
  const [showSelected, setShowSelected] = useState(false)
  const [snackbar, setSnackbar] = useState({open: false,message: "", type: "success"})

  const handleSelect = (tutor) => {
    const exists = selectedTutors.find((t) => t.id === tutor.id)

    if (exists) {
      setSelectedTutors(selectedTutors.filter((t) => t.id !== tutor.id))
      return
    }

    if (selectedTutors.length === 3) {
        setSnackbar({   open: true,message: "You can only select up to 3 tutors", type: "error"
    })
    return
    }

    setSelectedTutors([...selectedTutors, tutor])
  }

  const removeTutor = (id) => {
    setSelectedTutors(selectedTutors.filter((t) => t.id !== id))
  }

  const confirmDemo = () => {
    console.log("Demo requested with tutors:", selectedTutors)
    if (selectedTutors.length === 0)
   {
      setSnackbar({ open: true, message: "Please select at least one tutor", type: "error" })
      return
    }

     setSnackbar({ open: true, message: "Demo request sent Successfully !", type: "success" })
     setSelectedTutors([])
  }

  return (
    <div className="min-h-screen p-4 md:p-6 flex flex-col md:flex-row gap-6">

      {/* Left Content */}
      <div className="flex-1">

        <SearchComponent />

        <div className="mb-4">
          <p className="text-gray-500 mt-2"> Select up to 3 tutors for a free demo session</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 mdlg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
         {tutors.map((tutor, index) => (
         <motion.div key={tutor.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} transition={{ duration: 0.4, delay: index * 0.08 }}>
             <TutorCard tutor={tutor} isSelected={selectedTutors.some(   (t) => t.id === tutor.id   )} onSelect={handleSelect}  />
         </motion.div>
        ))}
       </div>

      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[320px]">
        <SelectedTutors selected={selectedTutors} removeTutor={removeTutor} confirmDemo={confirmDemo} />
      </div>


      {/* Mobile Floating Button */}
      {selectedTutors.length > 0 && (
        <button  onClick={() => setShowSelected(true)} className="  fixed bottom-5 right-5  lg:hidden  bg-blue-600  text-white px-5 py-3 rounded-full shadow-lg  z-50" >
          Selected ({selectedTutors.length})
        </button>
      )}


      {/* Mobile Popup */}
      {showSelected && (
        <div className="  fixed inset-0 bg-black/50  z-50 lg:hidden   flex items-end ">

          <div className="  bg-[#031a29]  w-full  rounded-t-2xl  p-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-lg font-semibold">  Selected Tutors </h2>
                    <button onClick={() => setShowSelected(false)}  className="text-white text-xl" >  ✕ </button>
              </div>
                <SelectedTutors selected={selectedTutors} removeTutor={removeTutor} confirmDemo={confirmDemo} />
          </div>

        </div>
      )}
    <Snackbar open={snackbar.open} message={snackbar.message} type={snackbar.type} onClose={() => setSnackbar({ ...snackbar, open: false })} />
    </div>
  )
}

export default TutorListing 