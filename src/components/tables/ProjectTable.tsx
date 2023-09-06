import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TrashIcon } from "../../img/svg/TrashIcon";
import { EditIcon } from "../../img/svg/EditIcon";
import {
  ActionsColumn,
  AddButton,
  BackButton,
  TableContainer,
  TableContent,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../styles/TableStyles";
import { useQueryClient } from "react-query";
import { useDeleteProject } from "../../hooks/filterHooks";
import BasicBox from "../basic/BasicBox";
import ProjectModal from "../modals/ProjectModal";
import useUrl from "../../hooks/useURL";

type TableProps = {
  onBack: () => void;
};

const ProjectTable: React.FC<TableProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const queryProjects: any[] = queryClient.getQueryData("projects") || [];
  const [editProjectData, setEditProjectData] = useState<any | null>(null);
  const deleteProjectCB = useDeleteProject();
  const urlDomain = useUrl();

  const [projects, setProjects] = useState(queryProjects);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = (project: any) => {
    setIsEditModalOpen(true);
    setEditProjectData(project);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addProjectInList = (newProject: any) => {
    setProjects((prevProjects: any[]) => [...prevProjects, newProject]);
  };

  const updateProjectInList = (updatedProject: any) => {
    setProjects((prevProjects: any[]) =>
      prevProjects.map((project: any) =>
        project.idprojects === updatedProject.idprojects
          ? updatedProject
          : project
      )
    );
  };

  const deleteProject = async (id: number) => {
    await deleteProjectCB.mutateAsync(id);
    setProjects((prevProjects: any[]) =>
      prevProjects.filter((location: any) => location.idprojects !== id)
    );
  };

  return (
    <TableContainer>
      <BasicBox style={{ gap: "40px" }} bottom="40px">
        <BackButton onClick={onBack}>Назад</BackButton>
        <AddButton
          onClick={openModal}
          style={{ width: "-webkit-fill-available!important" }}
        >
          Добави проект
        </AddButton>
      </BasicBox>
      <TableWrapper>
        <TableHeader numColumns={4}>
          <div>ID</div>
          <div>Project name</div>
          <div>Project Images</div>
          <div>Actions</div>
        </TableHeader>
        <TableContent>
          {projects.map((project: any) => (
            <TableRow numColumns={4} key={project.idprojects}>
              <div>{project.idprojects}</div>
              <div>{project.project_name}</div>
              <div>
                {project.image_url &&
                  project.image_url.map((url: any) => {
                    return (
                      <img
                        key={url}
                        crossOrigin="anonymous"
                        src={urlDomain + "/images/" + url}
                        alt=""
                        style={{ width: "100px" }}
                      />
                    );
                  })}
              </div>
              <ActionsColumn>
                <EditIcon onClick={() => openEditModal(project)} />
                <TrashIcon onClick={() => deleteProject(project.idprojects)} />
              </ActionsColumn>
            </TableRow>
          ))}
        </TableContent>
      </TableWrapper>
      {isModalOpen && <ProjectModal onClose={closeModal} mode="create" />}
      {isEditModalOpen && (
        <ProjectModal
          onClose={closeEditModal}
          mode="edit"
          addProjectInList={addProjectInList}
          updateProjectInList={updateProjectInList}
          projectData={editProjectData}
        />
      )}
    </TableContainer>
  );
};

export default ProjectTable;
