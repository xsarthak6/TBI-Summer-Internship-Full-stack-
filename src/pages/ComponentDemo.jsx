import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function ComponentDemo() {
  const [openModal, setOpenModal] = useState(false);

  const [showToast, setShowToast] = useState(false);

  return (
    <div
        className="
        min-h-screen
        p-10
        space-y-10
        bg-white
        text-black
        dark:bg-gray-900
        dark:text-white
        "
        >
      <ThemeToggle />
      <h1 className="text-4xl font-bold">
        AI EcoStay Component Library
      </h1>

      {/* Buttons */}

      <div className="space-x-4">

        <Button variant="primary">
          Explore Stays
        </Button>

        <Button variant="secondary">
          Plan With AI
        </Button>

        <Button variant="dark">
          Book Now
        </Button>

      </div>

      {/* Inputs */}

      <div className="max-w-md">

        <Input
          label="Destination"
          placeholder="Enter destination"
        />

      </div>

      {/* Modal */}

      <Button
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </Button>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Booking Confirmation"
      >
        <p>
          Confirm your booking?
        </p>
      </Modal>

      {/* Toast */}

      <Button
        onClick={() => setShowToast(true)}
      >
        Show Toast
      </Button>

      {showToast && (
        <Toast message="Booking Successful!" />
      )}

      {/* Loader */}

      <Loader />

    </div>
  );
}

export default ComponentDemo;