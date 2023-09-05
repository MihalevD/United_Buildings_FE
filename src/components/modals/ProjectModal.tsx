import React, { ChangeEvent, useEffect, useState } from "react";
import { SmallButton } from "../basic/SmallButton";
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  ButtonsContainer,
  RedButton,
  ImageContainer,
  Thumbnail,
  DeleteCircle,
} from "../../styles/ModalStyles";
import {
  Project,
  usePostProject,
  useUpdateProject,
} from "../../hooks/filterHooks";
import BasicBox from "../basic/BasicBox";

const initialFormData = {
  project_name: "",
};

interface ProjectModalProps {
  onClose: () => void;
  mode: "create" | "edit"; // Define a mode prop
  projectData?: Project; // Pass existing data when in edit mode
  updateProjectInList?: (data: any) => void;
  addProjectInList?: (data: any) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  onClose,
  mode,
  projectData,
  updateProjectInList = () => {},
  addProjectInList = () => {},
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [images, setImages] = useState<File[]>([]);
  const [oldImages, setOldImages] = useState<string[]>(
    projectData?.image_url || []
  );

  useEffect(() => {
    if (mode === "edit" && projectData) {
      setFormData({
        project_name: projectData.project_name || "",
      });
    }
  }, [mode, projectData]);

  const addProject = usePostProject();
  const updateProject = useUpdateProject();

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setImages((prevImages) => [...prevImages, ...Array.from(selectedFiles)]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const removeFromProject = (index: number) => {
    setOldImages((prevOldImages) => {
      const newImages = [...prevOldImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = async () => {
    try {
      if (mode === "create") {
        const data = await addProject.mutateAsync({
          ...formData,
          imageFiles: images,
        });
        addProjectInList(data);
      } else if (mode === "edit") {
        let requestData: any = {
          project_name: formData.project_name,
        };
        if (oldImages) {
          requestData["images"] = oldImages;
        }
        const newData = await updateProject.mutateAsync({
          projectid: Number(projectData?.idprojects),
          updatedData: requestData,
          imageFiles: images,
        });
        if (typeof newData.image_url === "string") {
          newData.image_url = JSON.parse(newData.image_url) || [];
        }
        updateProjectInList(newData);
      }
      onClose();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>
          {mode === "create"
            ? "Добави проект"
            : `Промени проект №${projectData?.idprojects || ""}`}
        </h2>

        <StyledInput
          type="text"
          name="project_name"
          placeholder="Име на проект"
          value={formData.project_name}
          onChange={(e) => handleInputChange(e.target.value, "project_name")}
        />

        <BasicBox fullWidth style={{ flexWrap: "wrap", gap: "10px" }}>
          {images.map((image, index) => (
            <BasicBox key={index} style={{ position: "relative" }}>
              <Thumbnail
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
              />
              <DeleteCircle onClick={() => removeImage(index)} />
            </BasicBox>
          ))}
          {oldImages &&
            oldImages.map((image, index) => {
              return (
                <BasicBox key={index} style={{ position: "relative" }}>
                  <Thumbnail
                    crossOrigin="anonymous"
                    src={"http://localhost:3000/images/" + image}
                    alt={`Image ${index}`}
                  />
                  <DeleteCircle onClick={() => removeFromProject(index)} />
                </BasicBox>
              );
            })}
        </BasicBox>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />

        <ButtonsContainer>
          <RedButton onClick={onClose}>Затвори</RedButton>
          <SmallButton onClick={handleSubmit}>
            {mode === "create" ? "Създай" : "Запази"}
          </SmallButton>
        </ButtonsContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
